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

export const isGateClient = () => {
  const { userAgent }  = navigator
  return userAgent.indexOf('GateIO') > -1
}
