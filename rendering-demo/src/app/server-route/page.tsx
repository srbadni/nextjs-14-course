import {serverSideFunction} from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log("server route rendered")
    const settings = {
        dots: true,
      };
    return <div>
        my server component
        <div className="image-slider-container">
      <ImageSlider />
    </div>
    </div>
}