import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import { APIResponse } from "@/lib/types/api";
import {
  facebookProfile,
  googleProfile,
  twitterProfile,
} from "@/lib/types/next-auth";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    //Credential provider
    CredentialsProvider({
      name: "credential",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credential) {
        const response = await fetch(`${process.env.BASIC_API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credential?.email,
            password: credential?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const payload: APIResponse<User> = await response.json();
        if (payload.message !== "success") throw new Error(payload.message);

        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),

    //OAuth providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOKE_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    //jwt

    jwt: ({ token, user, profile, account }) => {
      if (profile) {
        //Use Google provider to signin

        if (account?.provider === "google") {
          const googleProfile = profile as googleProfile;
          token.google = {
            email: googleProfile.email || "",
            name: googleProfile.name || "",
            image: googleProfile.picture || "",
            given_name: googleProfile.given_name || "",
            family_name: googleProfile.family_name || "",
            iat: googleProfile.iat,
            exp: googleProfile.exp,
          };
        }

        // Use Facebook provider to signin
        if (account?.provider === "facebook") {
          const facebookProfile = profile as facebookProfile;
          token.facebook = {
            id: facebookProfile.id || "",
            name: facebookProfile.name || "",
            email: facebookProfile.email || "",
            image: facebookProfile.picture.data.url || "",
          };
        }
      }

      //Use Twitter Provider to signin
      if (account?.provider === "twitter") {
        const twitterProfile = profile as twitterProfile;
        token.twitter = {
          id: twitterProfile.id,
          name: twitterProfile.name,
          image: twitterProfile.profile_image_url,
        };
      }

      // Use Credential to signin
      else if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      return token;
    },

    //session

    session: ({ session, token }) => {
      session.user =
        token.user || token.google || token.facebook || token.twitter;

      return session;
    },
  },
};
