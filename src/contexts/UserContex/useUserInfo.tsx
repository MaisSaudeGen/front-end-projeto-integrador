import { useContext } from "react"
import { UserInfo } from "./UserContex"

export const useUserInfo = () => {
  const context = useContext(UserInfo)
  return context
}