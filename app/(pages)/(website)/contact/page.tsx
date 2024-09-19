import ContactForm from "@/components/modules/website/contact/ContactForm";
import { Metadata } from "next";
import React from "react";

export default async function page() {
  return (
    <div className="my-10">
      <ContactForm />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description: "",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
