import type { Metadata } from "next";
import GoRedirect from "./GoRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const to = typeof sp.to === "string" ? sp.to : undefined;
  return <GoRedirect slug={slug} to={to} />;
}
