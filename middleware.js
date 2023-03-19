import { NextResponse } from 'next/server';
import { USER_ROLES } from './constants';
import Auth from './utils/Auth';

const routesConfig = {
  public: ['/', '/signin', '/api/signin'],
  protected: [{ path: '/admin', roles: [USER_ROLES.ADMIN] }],
};

async function authorize(path, req) {
  if (routesConfig.public.includes(path)) {
    return true;
  }

  const authPayload = await Auth.isAuthenticated(
    req.headers.get('authorization')
  );

  console.log('authPayload', authPayload);

  if (authPayload) {
    const matchedPath = routesConfig.protected.find((r) => r.path === path);

    return matchedPath.roles.includes(authPayload.role);
  }

  return false;
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
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
