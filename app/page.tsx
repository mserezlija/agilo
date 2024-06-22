import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome NextJS</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
