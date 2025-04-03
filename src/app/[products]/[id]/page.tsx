import { products } from "../page";
import styles from "./styles.module.scss";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Post } = await import(`@/content/${id}.mdx`);
  const image = products.find((product) => product.id === id)?.heroImage;

  return (
    <div>
      <h1>Product page</h1>
      <section>
        <div className={styles.heroImage}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </div>
        <Post />
      </section>
    </div>
  );
}

export const dynamicParams = false;
