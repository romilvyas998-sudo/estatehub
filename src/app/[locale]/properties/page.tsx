import { Suspense } from "react";
import { ListingsExperience } from "@/components/listings-experience";

export default function Properties({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsExperience locale={params.locale} />
    </Suspense>
  );
}
