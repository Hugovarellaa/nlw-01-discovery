import * as AuthSession from 'expo-auth-session';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { createContext, ReactNode, useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession()

interface User {
  name: string
  avatarUrl: string
}

export interface AuthContextProps {
  user: User
  isUserLoading: boolean
  signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [isUserLoading, setIsUserLoading] = useState(false)


  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "610127349638-06v1l2mlqf721p4u4reeb21ec150rtp2.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })


  async function signIn() {
    try {
      setIsUserLoading(true)

      await promptAsync()

    } catch (error) {
      console.log(error)
    } finally {
      setIsUserLoading(false)
    }
  }

  async function signInGoogle(access_token: string) {
    console.log(`Token de acesso ====> ${access_token}}`)
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication.accessToken) {
      signInGoogle(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      isUserLoading
    }}>
      {children}
    </AuthContext.Provider >
  )

}
