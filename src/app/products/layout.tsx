import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Product page</h1>

      <Link href="/products/">Back to products</Link>

      <section>{children}</section>
    </div>
  );
}
