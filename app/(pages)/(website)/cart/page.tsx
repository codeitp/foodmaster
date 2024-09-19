import Cart from "@/components/modules/website/cart";
import { Metadata } from "next";
import React from "react";

export default async function page() {
  return <Cart />;
}

export const metadata: Metadata = {
  title: "Cart",
  description: "",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
