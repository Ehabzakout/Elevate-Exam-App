import GetExamOnSubject from "@/components/features/get-exam-on-subject";
import DeleteSubjectButton from "./_components/delete-subject-button/delete-subject-button";
import AddExamButton from "./_components/add-exam-button/add-exam-button";
import UpdateSubject from "./_components/update-subject-button/update-subject";
import { TSubjectParams } from "@/lib/types/components-props";

export default function page({ params }: TSubjectParams) {
  // Params
  const subjectTitle = params.subject[0];
  const id = params.subject[1];

  return (
    <>
      <GetExamOnSubject id={id} subjectTitle={subjectTitle} admin={true} />
      <div className="ms-auto mt-10 flex w-fit gap-6">
        <AddExamButton id={id} />
        <UpdateSubject id={id} />
        <DeleteSubjectButton id={id} />
      </div>
    </>
  );
}
