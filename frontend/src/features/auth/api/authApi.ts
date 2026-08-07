import axios from "axios"

const API_BASE_URL = "http://127.0.0.1:8000"

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}

export interface UserResponse {
  id: number
  name: string
  email: string
  created_at: string
}

export async function registerUser(payload: RegisterPayload): Promise<UserResponse> {
  const res = await axios.post(`${API_BASE_URL}/auth/register`, payload)
  return res.data
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, payload)
  return res.data
}