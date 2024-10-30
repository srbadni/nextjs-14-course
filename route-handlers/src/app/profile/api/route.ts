import {NextRequest} from "next/server";
import {headers, cookies} from "next/headers";

export async function GET(request: NextRequest) {
    const myHeaders = new Headers(request.headers);
    const headersList = headers();
    cookies().set("age", "20");
    console.log(myHeaders.get("Authorization"));
    console.log(headersList.get("Authorization"));
    console.log(request.cookies.get("theme"), "theme");
    console.log(cookies().get("age"), "age")
    return new Response("<h1>api پروفایل</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}