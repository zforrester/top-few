export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Post } = await import(`@/content/${id}.mdx`);

  return <Post />;
}

export const dynamicParams = false;
