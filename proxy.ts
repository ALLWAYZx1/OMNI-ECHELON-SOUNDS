import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/oes-logo.webp") {
    return NextResponse.rewrite(new URL("/logo.png", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/oes-logo.webp",
};
