export const checkMobileSystem = () => {
  const { userAgent } = navigator

  return {
    isAndroid: userAgent.indexOf('Android') > -1,
    isIOS: userAgent.indexOf('iPhone') > -1
  }
}
