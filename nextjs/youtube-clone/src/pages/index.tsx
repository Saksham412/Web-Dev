import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Friends: The one with the pranks"}
        thumbnail={"./friends.png"}
        timestamp={"20 hours ago"}
        authorImg={"./logo.png"}
        views={"20M views"}
      ></VideoCard>
    </div>
    
  );
}
