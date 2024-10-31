import NextAuth from 'next-auth'
import azureAd from 'next-auth/providers/azure-ad'


export const { 
  handlers: {GET, POST},
    auth,
    signIn,
    signOut
  } = NextAuth({
  providers: [
    azureAd({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: { params: { scope: "openid profile user.read email" } }
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt'},
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production' ? '__Secure-authjs.session-token' : 'authjs.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production', 
        domain: process.env.COOKIE_DOMAIN,
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if(user){
        token.user = user;
      }
      return token;
    },
    async session({session, token}){
      if(token) session.user = token.user;
      return session;
    }
  },
})
