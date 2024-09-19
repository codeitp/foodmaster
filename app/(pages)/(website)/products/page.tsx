import ProductsPage from "@/components/modules/website/products/ProductsPage";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return <ProductsPage />;
}

export const metadata: Metadata = {
  title: "Foodmasters",
  description: "",
  icons: {
    icon: "/assets/images/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "Products - Next Js App",
    url: "/",
  }),
};
