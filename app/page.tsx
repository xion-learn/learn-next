import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/router">go to router</Link>
      <br />
      <Link href="/throw-error">go to throw-error</Link>
    </main>
  );
}
