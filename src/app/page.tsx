import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12">
      <Image
        src="/portrait.jpg"
        alt="Portrait photo of Krzysztof Adam Witalewski steering a yacht"
        className="rounded-full border border-zinc-900 dark:border-zinc-300 mb-3 xs:mb-10"
        width={240}
        height={240}
      />
      <h1 className="text-3xl mb-2 sm:mb-1 text-center">Krzysztof Adam Witalewski</h1>
      <h2 className="text-xl text-center">Software Engineer</h2>
    </main>
  );
}
