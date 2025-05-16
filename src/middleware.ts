import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const protectedRoute = ["/dashboard", "/auth/user", "/quiz-history"];
const authRoute = ["/auth/login", "/auth/register"];

export default async function middleware(req: NextRequest) {
  //define variable

  const pathname = req.nextUrl.pathname;
  const isAuth = await getToken({ req });
  const isProtected = protectedRoute.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoute.some((route) => pathname.startsWith(route));
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdmin = true;
  //Conditions for routing

  if (pathname === "/")
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));

  if (isAuthRoute) {
    if (isAuth)
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));

    return NextResponse.next();
  }

  if (isProtected) {
    if (!isAuth)
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));

    if (!isAdminRoute) return NextResponse.next();

    if (!isAdmin)
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));

    if (pathname === "/admin") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", req.nextUrl.origin),
      );
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/auth/user",
    "/auth/login",
    "/auth/register",
    "/",
    "/admin",
    "/quiz-history",
  ],
};
