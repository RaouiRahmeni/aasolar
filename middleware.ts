// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  // Handle root path redirect to default locale (en)
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Use the next-intl middleware for all other routes
  return createMiddleware(routing)(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/", "/(en|ar)/:path*", "/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
