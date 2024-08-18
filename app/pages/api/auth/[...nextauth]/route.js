import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID, 
        clientSecret: process.env.GOOGLE_SECRET
    }),
    FacebookProvider({
        clientId:process.env.FACEBOOK_ID,
        clientSecret:process.env.FACEBOOK_SECRET
           }),
    CredentialsProvider({
      name: "Credentials", 
      credentials:{
        username: {
          label:'Username', type:'text', placeholder:"username"
        }, 
        password:{label:'Password', type:'password'}
      }, 
      async authorize(credentials, req){
        /**
         * add search database to get user object
         */
      
      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
  ],
}

const handler = NextAuth(authOptions)

export{
  handler as GET, handler as POST
}