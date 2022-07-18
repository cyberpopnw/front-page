import { AuthorizeResponse } from '@/api/gateOauth'

export type Token = {
  accessCode: string;
  refreshToken: string;
  scope: string;
  tokenType: string;
}

export const tokenItemKey = 'gateToken'

export const clientID = '9a5a0d70-1ac1-5160-8eb2-8186ae35b6ec'

export const secret = '2EX6pMu9JsEWBcPZWHAmMDl4lZ8oj4dT'

export const authorizationUri = `https://miniapp-sandbox.gateapi.io/oauth/authorize?response_type=code&client_id=${clientID}&redirect_uri=https://h5.cyberpop.online&state=CSRF_TOKEN&scope=read_profile,read_wallet`

export const setToken = (response: AuthorizeResponse) => {
  localStorage.setItem(tokenItemKey, JSON.stringify({
    accessCode: response['access_code'],
    refreshToken: response['refresh_token'],
    scope: response.scope,
    tokenType: response['token_type']
  } as Token))
}

export const getToken = () => {
  const token = window.localStorage.getItem(tokenItemKey)
  if (token) {
    try {
      return (JSON.parse(token) as Token)
    } catch (e) {
    }
  }
  return
}

export const hasToken = () => getToken() != null

export const clearToken = () => localStorage.removeItem(tokenItemKey)

export const isGateClient = () => {
  const { userAgent }  = navigator
  return userAgent.indexOf('GateIO') > -1
}

export const goToAuthorization = () => window.location.replace(authorizationUri)
