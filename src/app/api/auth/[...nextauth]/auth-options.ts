import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchRequestToken, fetchSessionId } from '@/services/auth';

const providers = [
  CredentialsProvider({
    name: 'credentials',
    credentials: {
      username: {},
      password: {},
    },
    async authorize(credentials) {
      if (!credentials) throw new Error('Credentials not given');

      const requestToken = await fetchRequestToken();

      if (!requestToken) throw new Error('Request token not valid');

      const { username, password } = credentials;
      const sessionId = await fetchSessionId({ username, password, requestToken });

      if (!sessionId) throw new Error('Failed to generate sessionId');

      return { id: sessionId };
    },
  }),
];

export const authOptions: AuthOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  session: {
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/',
  },
};
