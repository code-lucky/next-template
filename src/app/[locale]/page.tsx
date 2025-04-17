// app/[locale]/page.tsx
import { getDictionary } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: { locale: "en" | "zh" };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <main className="container mx-auto px-4 py-8 max-w-screen-xl w-full">
      <h1>{dict.home.title}</h1>
    </main>
  );
}
