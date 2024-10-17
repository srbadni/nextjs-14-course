import {comments} from "@/app/comments/data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: String(comments.length + 1),
        text: comment.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        }
    });
}