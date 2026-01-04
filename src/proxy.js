import { NextResponse } from "next/server";
import checkAdmin from "./lib/checkLogin";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isAdmin = await checkAdmin();

  if (pathname === "/admin-login" && isAdmin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!isAdmin && pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin-login"],
};
