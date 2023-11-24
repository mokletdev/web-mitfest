import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
  findUserByEmail,
  authenticate,
  createUser,
} from "@/utils/queries/user.query";
import { type DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: "User" | "Admin" | "SuperAdmin";
      email: string;
      verified: boolean;
      someExoticUserProperty?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    email: string;
    verified: boolean;
    role: "User" | "Admin" | "SuperAdmin";
  }
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Log In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@email.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        let findUser = await authenticate(
          credentials?.email || "",
          credentials?.password || "",
        );
        if (findUser.status !== "SUCCESS") return null;
        const user = {
          id: String(findUser.user?.id),
          email: findUser.user?.email,
          role: findUser.user?.role || "User",
          verified: findUser.user?.is_verified,
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: false,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
    async signIn({ user }) {
      if (user.email) {
        let findUser = await findUserByEmail(user.email);
        if (!findUser) {
          findUser = await createUser({
            email: user?.email || "",
            name: user?.name || "",
            is_verified: true,
            role: "User",
            v: 0,
            password: "",
          });
        }
      }
      return true;
    },
    async jwt({ token }) {
      if (token.email) {
        let findUser = await findUserByEmail(token.email!);
        token.name = findUser?.name || token?.name;
        token.role = findUser?.role || "User";
        token.id = findUser?.id || "";
        token.verified = Boolean(findUser?.is_verified);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        let findUser = await findUserByEmail(session.user?.email!);
        session.user.role = findUser?.role || "User";
        session.user.id = findUser?.id || "";
        session.user.verified = Boolean(findUser?.is_verified);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
