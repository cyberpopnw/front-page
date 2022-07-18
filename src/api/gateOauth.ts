import _axios from 'axios'
import type { AxiosAuthRefreshRequestConfig } from 'axios-auth-refresh';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import qs from 'qs'
import { clearToken, getToken, hasToken, setToken, clientID, secret, authorizationUri } from '@/tools/gateIo'
import type { Token } from '@/tools/gateIo'

const axios = _axios.create({
  baseURL: '/sand'
})

axios.interceptors.request.use(
  config => {
    const token = getToken()
    config.headers = {
      Authorization:  token ? `${token.tokenType} ${token.accessCode}` : '',
      ...config.headers,
    }
    return config
  })

axios.interceptors.response.use(
  res => res
)

createAuthRefreshInterceptor(
  axios,
  failedRequest => refreshToken()
    .then(() => {
      const token = getToken()
      return failedRequest.response.config.headers['Authorization'] = token ? `${token.tokenType} ${token.accessCode}` : ''
    })
)


export type AuthorizeResponse = {
  'access_code': string;
  'refresh_token': string;
  'token_type': string;
  scope: string;
}

// Request
export const requestToken = <T>(data: FormData) => axios.post<T>('/oauth/token', data, {
  skipAuthRefresh: true,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Authorization': ''
  }
} as AxiosAuthRefreshRequestConfig)
  .catch(res => {
    clearToken()
    // window.location.replace(authorizationUri)
    return Promise.reject(res)
  })

export const refreshToken = () => {
  const token = getToken() as Token
  const data = new FormData()
  data.append('grant_type', 'refresh_token')
  data.append('refresh_token', token.refreshToken)
  data.append('redirect_uri', `https://h5.cyberpop.online`)
  data.append('client_id', clientID)
  data.append('client_secret', secret)

  return requestToken(data)
}

export const changeToken = (code: string) => {
  const data = new FormData()
  data.append('grant_type', 'authorization_code')
  data.append('code', code)
  data.append('redirect_uri', 'https://h5.cyberpop.online')
  data.append('client_id', clientID)
  data.append('client_secret', secret)

  return requestToken<AuthorizeResponse>(data)
}

export const getUserInfo = () => axios.get('/openapi/v1/user_profile')

// Process
export const gateAuthorization = async () => {
  const queryParams = qs.parse(window.location.search.slice(1))
  if (!hasToken() && !queryParams.code) {
    window.location.replace(authorizationUri)
    return Promise.reject('Token not exist.')
  } else if (queryParams.code) {
    return changeToken(queryParams.code as string)
      .then(({ data }) => setToken(data))
      .then(() => {
        window.location.replace('/')
        return Promise.resolve()
      })
  }
  return Promise.resolve()
}
