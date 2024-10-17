import {comments} from "@/app/comments/data";

export async function GET(_request: Request, {params}: {params: { id: string }}) {
    const comment = comments.find(comment => comment.id === params.id);
    return Response.json(comment);
}