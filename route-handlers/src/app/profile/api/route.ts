import {NextRequest} from "next/server";
import {headers} from "next/headers";

export async function GET(request: NextRequest) {
    const myHeaders = new Headers(request.headers);
    const headersList = headers();
    console.log(myHeaders.get("Authorization"));
    console.log(headersList.get("Authorization"));
    return new Response("<h1>api پروفایل</h1>", {
        headers: {
            "Content-Type": "text/html",
        }
    });
}