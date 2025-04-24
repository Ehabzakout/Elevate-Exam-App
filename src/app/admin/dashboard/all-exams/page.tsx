import GetAllExams from "@/components/features/get-all-exams";
import { TSearchParams } from "@/lib/types/components-props";

export default function page({ searchParams }: TSearchParams) {
  const searchParam = searchParams["search-exam"];
  return (
    <>
      <GetAllExams admin={true} searchParam={searchParam} />
    </>
  );
}
