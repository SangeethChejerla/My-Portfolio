import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="mt-10">The request page does not exist</p>
      <Link href="/">Return to Home</Link>
    </div>
  );
}