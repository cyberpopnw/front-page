import { AuthorizeResponse, Token, tokenItemKey } from '@/api/gateOauth'

export const setToken = (response: AuthorizeResponse) => {
  localStorage.setItem(tokenItemKey, JSON.stringify({
    accessToken: response['access_token'],
    refreshToken: response['refresh_token'],
    scope: response.scope,
    tokenType: response['token_type']
  }))
}

export const getToken = () => {
  const token = window.localStorage.getItem('token')
  if (token) {
    try {
      return (JSON.parse(token) as Token)
    } catch (e) {
    }
  }
  return
}

export const hasToken = () => Boolean(getToken())

export const clearToken = () => localStorage.removeItem(tokenItemKey)

export const checkClient = () => {
  const { userAgent }  = navigator
  const flagIndex = userAgent.indexOf('GateIO')
  const isGateClient = flagIndex > -1

  return {
    isGateClient,
    gateClientType: isGateClient ? userAgent.slice(flagIndex).split('/')[1] as 'Android' | 'IOS' : undefined
  }
}
