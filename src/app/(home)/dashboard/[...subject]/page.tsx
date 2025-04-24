import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import GetExamOnSubject from "@/components/features/get-exam-on-subject";

export default async function page({ params }: Params) {
  // Params
  const subjectTitle = params.subject[0];
  const id = params.subject[1];

  return (
    <>
      <GetExamOnSubject id={id} subjectTitle={subjectTitle} />
    </>
  );
}
