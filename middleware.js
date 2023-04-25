import { NextResponse } from 'next/server';
import { USER_ROLES } from './constants';
import Auth from './utils/Auth';

const routesConfig = {
  public: ['/api/signin'],
  protected: [
    { path: '/api/admin', roles: [USER_ROLES.ADMIN] },
    { path: '/api/event-categories', roles: [USER_ROLES.ADMIN] },
    { path: '/api/event-locations', roles: [USER_ROLES.ADMIN] },
  ],
};

async function authorize(path, req) {
  if (routesConfig.public.includes(path)) {
    return true;
  }

  const authPayload = await Auth.isAuthenticated(
    req.headers.get('authorization')
  );

  if (authPayload) {
    const matchedPath = routesConfig.protected.find((r) => r.path === path);

    return matchedPath.roles.includes(authPayload.role);
  }

  return false;
}

export const config = {
  matcher: '/api/:function*',
};

export async function middleware(req, res) {
  const path = req.nextUrl.pathname;
  if (
    routesConfig.public.includes(path) ||
    routesConfig.protected.map((r) => r.path).includes(path)
  ) {
    const isAllowed = await authorize(path, req);

    if (!isAllowed) {
      return new NextResponse(
        JSON.stringify({ message: 'Permission Denied!' }),
        {
          status: 401,
          headers: { 'content-type': 'application/json' },
        }
      );
    }

    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL('/404', req.url));
}
