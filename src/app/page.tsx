import Image from "next/image";
import { PaperSurface } from "./paper-background";
import SocialLinks from "./social-links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12">
      <div className="relative size-60 shrink-0 overflow-hidden rounded-full mb-3 xs:mb-10">
        <Image
          src="/portrait.jpg"
          alt="Portrait photo of the author behind a yacht's steering wheel"
          width={240}
          height={240}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <PaperSurface image="/portrait.jpg" />
        </div>
      </div>
      <h1 className="text-3xl mb-2 sm:mb-1 text-center">Chris Witalewski</h1>
      <h2 className="text-xl text-center">Software Engineer</h2>
      <SocialLinks />
    </main>
  );
}
