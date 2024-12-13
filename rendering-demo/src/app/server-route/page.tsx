import { ClientSideFundtion } from "@/utils/client-utils";
import {serverSideFunction} from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    const result2 = ClientSideFundtion();
    console.log("server route rendered")
    return <div>
        my server component
        <div className="image-slider-container">
    </div>
    </div>
}