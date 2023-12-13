import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// middleware is applied to all routes, use conditionals to select

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      !req.nextauth.token?.verified
    )
      return NextResponse.rewrite(new URL("/auth/error/verify", req.url));
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const pathname = req.nextUrl.pathname;
        if (pathname.startsWith("/admin") && !token?.role?.includes("Admin")) {
          return false;
        } else if (pathname == "/admin/users" && token?.role != "SuperAdmin") {
          return false;
        } else if (pathname.startsWith("/dashboard") && !token?.email) {
          return false;
        }
        return true;
      },
    },
  },
);
