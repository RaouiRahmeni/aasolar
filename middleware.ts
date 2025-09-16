// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Handle root path redirect to default locale (en)
  if (request.nextUrl.pathname === "/") {
    const locale = routing.defaultLocale;
    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }

  // Use the next-intl middleware for all other routes
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",
    // Set a cookie to remember the previous locale for all requests
    "/(en|ar)/:path*",
    // Enable redirects that add a locale by default
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
