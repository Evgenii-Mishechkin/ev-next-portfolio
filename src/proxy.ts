import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';

import {routing, type Locale} from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

export function proxy(request: NextRequest) {
  const {pathname} = request.nextUrl;

  const [, maybeLocale, ...rest] = pathname.split('/');

  if (maybeLocale && !isLocale(maybeLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}/${rest.join('/')}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
