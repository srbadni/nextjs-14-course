import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "دیوار بزرگ چین",
    src: photo1,
    photographer: "عکس Max van den Oetelaar در Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "پترا",
    src: photo2,
    photographer: "عکس توسط Reiseuhu در Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "مسیح نجات دهنده",
    src: photo3,
    photographer: "عکس آندریا لئوپاردی در Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "ماچو پیچو",
    src: photo4,
    photographer: "عکس Jared Schwitzke در Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "چیچن ایتزا",
    src: photo5,
    photographer: "عکس E Mens در Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "کولوسئوم رومی",
    src: photo6,
    photographer: "عکس آندریا سیپریانو در Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "تاج محل",
    src: photo7,
    photographer: "عکس سو سان لی در Unsplash",
    location: "India",
  },
];

export default wondersImages;
