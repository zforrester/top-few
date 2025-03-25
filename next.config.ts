import createMDX from "@next/mdx";

import type { NextConfig } from "next";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    implementation: "sass-embedded",
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
