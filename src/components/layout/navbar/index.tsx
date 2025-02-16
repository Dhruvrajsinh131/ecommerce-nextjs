import { getMenu } from "@/lib/shopify";

export async function NavBar() {
  const menu = await getMenu("next-js-frontend-menu");

  console.log("menu", menu);

  return <nav></nav>;
}
