import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themeValue = request.cookies.get("theme");
    if (!themeValue) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "test1")

    return response;
    // if (request.nextUrl.pathname === "/profile")
    //     return NextResponse.redirect(new URL("/hello", request.url));
}

// export const config = {
//     matcher: "/profile",
// }