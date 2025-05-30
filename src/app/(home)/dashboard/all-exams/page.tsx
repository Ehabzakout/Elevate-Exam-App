import GetAllExams from "@/components/features/get-all-exams";

export default async function page({
  searchParams,
}: {
  searchParams: { "search-exam": string };
}) {
  const searchParam = searchParams["search-exam"];

  return (
    <>
      <GetAllExams searchParam={searchParam} />
    </>
  );
}
