import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

// Routes

const protectedRoute = ["/dashboard"];
const authRoute = ["/auth/login", "/auth/register"];

//Middleware function
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

  if (!isAuth && isProtected)
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));

  if (isAuth && isProtected) return NextResponse.next();

  if (isAuth && isAuthRoute)
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));

  if (!isAuth && isAdminRoute)
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));

  if (isAdmin && isAdminRoute) return NextResponse.next();

  if (!isAdmin && isAdminRoute)
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
}

export const config = {
  matcher: [...protectedRoute, ...authRoute],
};
