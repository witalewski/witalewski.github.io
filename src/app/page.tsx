import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image
        src="/portrait.jpg"
        alt="Portrait photo of Krzysztof Adam Witalewski steering a yacht"
        className="rounded-full mb-10 border border-zinc-900 dark:border-zinc-300"
        width={240}
        height={240}
        priority
      />
      <h1 className="text-3xl mb-1">Krzysztof Adam Witalewski</h1>
      <h2 className="text-xl">Software Engineer</h2>
    </main>
  );
}
