
import { Pi } from '@pinetwork-js/sdk'

export const loginWithPi = async () => {
  try {
    const scopes = ['username']
    const user = await Pi.authenticate(scopes)
    console.log('로그인 성공:', user)
    return user
  } catch (error) {
    console.error('로그인 실패:', error)
    return null
  }
}
