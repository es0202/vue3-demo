const defaultTime = 60 * 60 * 24 * 7
export const Cookie = {
  setCookie(name: string, value: any, expire: number | null = defaultTime) {
    document.cookie = name + '=' + value + '; Max-Age=' + expire
  },
  getCookie(name: string) {
    const arr = document.cookie.split('; ')
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i].split('=')
      if (arr2[0] === name) {
        return arr2[1]
      }
    }
    return ''
  },
}
