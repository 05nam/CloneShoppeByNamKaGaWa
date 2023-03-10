import { User } from 'src/types/user.type'

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token ', access_token)
}

export const clearS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccesTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}
export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileFromLS = (profile: User) => {
  localStorage.setItem('ç', JSON.stringify(profile))
}
