import NextAuth from 'next-auth';

// Add an id to the Session
declare module 'next-auth' {
  interface Session {
    user: {
      id: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: string;
  }
}
