
import ScrollUp from "@/components/Common/ScrollUp";
import { Inter } from "@next/font/google";
import Features from "@/components/Features/Feature";
import Video from "@/components/Video";
import Description from "@/components/Description/Description";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Description />
      <Features />
      <Video />
    </>
  );
}
