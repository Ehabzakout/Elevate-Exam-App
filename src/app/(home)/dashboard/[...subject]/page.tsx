import GetExamOnSubject from "@/components/features/get-exam-on-subject";
import { TSubjectParams } from "@/lib/types/components-props";

export default async function page({ params }: TSubjectParams) {
  // Params
  const subjectTitle = params.subject[0];
  const id = params.subject[1];

  return (
    <>
      <GetExamOnSubject id={id} subjectTitle={subjectTitle} />
    </>
  );
}
