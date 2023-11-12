import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/admin") && !token?.role?.includes("Admin")) {
        return false;
      } else if (pathname.startsWith("/dashboard") && !token?.email) {
        return false;
      }
      return true;
    },
  },
});
