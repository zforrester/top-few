export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Product page</h1>
      <section>{children}</section>
    </div>
  );
}
