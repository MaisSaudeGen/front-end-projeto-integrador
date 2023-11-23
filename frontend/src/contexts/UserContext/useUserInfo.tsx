import { useContext } from "react"
import { UserInfo } from "./UserContext"

export const useUserInfo = () => {
  const context = useContext(UserInfo)
  return context
}