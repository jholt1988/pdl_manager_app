import type { Metadata } from "next";
import Landing from "@/app/components/landing/landing"

export default function IndexPage() {
  return <Landing />;
}

export const metadata: Metadata = {
  title: "PDL RENTALS MANAGEMENT APP",
};
