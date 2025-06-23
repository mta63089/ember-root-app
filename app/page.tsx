import CallToAction from "@/components/call-to-action";
import Image from "next/image";
export default function Home() {
  return (
    <div className="justify-center w-full min-h-svh flex-col">
      <div className="relative w-full h-[480px]">
        <Image
          src="https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_960_720.jpg"
          alt="Restaraunt Interior"
          fill
          className="object-cover"
        />
      </div>
      <CallToAction />
    </div>
  );
}
