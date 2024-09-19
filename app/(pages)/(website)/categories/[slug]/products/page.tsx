import CategoriesPage from "@/components/modules/website/categories/CategoriesPage";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <CategoriesPage slug={params.slug} />;
}

export const metadata: Metadata = {
  title: "Foodmasters",
  description: "",
  icons: {
    icon: "/assets/images/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "Categories",
    url: "/",
  }),
};
