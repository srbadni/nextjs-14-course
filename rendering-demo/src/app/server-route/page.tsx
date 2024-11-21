import {serverSideFunction} from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log("server route rendered")
    return <div>
        my server component
    </div>
}