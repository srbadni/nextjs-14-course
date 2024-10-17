import {comments} from "@/app/comments/data";

export async function GET() {
    return Response.json(comments);
}