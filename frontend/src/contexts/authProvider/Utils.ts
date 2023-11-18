import {api} from "../../services/API"
import { IUser } from "./types"

export async function loginRequest(email: string, password: string) {
  try {
    console.log({ email, "senha": password })
    const request = await api.post("/usuarios/logar", { "usuario": email, "senha": password },);
    return request.data;
  } catch (error) {
    return error;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    console.log({ email, "senha": password })
    const request = await api.post("/usuarios/cadastrar", { email, "senha": password },);
    return request.data;
  } catch (error) {
    console.error(error)
    return null;
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json){
    return null
  }

  const user = JSON.parse(json)
  return user ?? null;
}