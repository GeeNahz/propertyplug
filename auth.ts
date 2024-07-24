import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios'
import { decrypt } from './lib/utils';
import apiClient from './lib/apiConfig';


const BASE_URL = 'https://propertyplug-backend.onrender.com/api/v1'

// const user = {
//   email: 'user@email.com',
//   username: 'user',
//   password: '123456',
//   role: 'admin',
//   img: '/profile.png',
// }

async function login(credentials: Partial<Record<string, unknown>>) {
  const payload = { email: credentials.email, password: credentials.password }
  try {
    // if (payload.email === user.email && payload.password === user.password) return user
    //
    // throw new Error('Login failed')
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });

    apiClient.defaults.headers['Authorization'] = response.data['token']


    let user: any = {}

    try {
      const token = decrypt(response.data['token'])

      let user_id = (token as any)['ID'].split('"')[1]

      // retrieve actual user data
      const userData = await axios.get(`${BASE_URL}/users/${user_id}`, {
        headers: {
          Authorization: `${response.data['token']}`,
          'Content-Type': 'application/json',
        },
      })

      user['id'] = userData.data['id']
      user['email'] = userData.data['email']
      user['firstName'] = userData.data['firstName']
      user['lastName'] = userData.data['lastName']
      user['image'] = ''
      user['token'] = response.data['token']
    } catch (err: any) {
      throw new AuthError(err.message)
    }

    // for some reason, user session only picks up the returned
    // user data if it is returned in a user object.
    return user
  } catch (error: any) {
    throw new AuthError(error.message)
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error: any) {
          return null
        }
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = `${(user as any).firstName} ${(user as any).lastName}`
        token.picture = user.image
        token.token = (user as any).token
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as any
        session.user.email = token.email as string
        session.user.name = token.name
        session.user.image = token.picture as string
        (session.user as any).token = token.token
      }

      return session
    },
  },
});
