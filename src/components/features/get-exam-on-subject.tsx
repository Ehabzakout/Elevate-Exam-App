import getExamsOnSubject from "@/lib/actions/get-exams-on-subject";
import Image from "next/image";
import noExams from "@assets/images/noExams.webp";
import Quiz from "./quiz-component";

export default async function GetExamOnSubject({
  id,
  subjectTitle,
  admin = false,
}: {
  id: string;
  subjectTitle: string;
  admin?: boolean;
}) {
  // fetch exam on subject by server action
  const data = await getExamsOnSubject(id);

  // Destruct response
  const { message, exams } = data;
  if (message !== "success") throw new Error("Can't fetch the exams");

  return (
    <>
      {/* Subject title */}
      <h1 className="mb-6 text-xl font-[500] capitalize">
        {subjectTitle.split("%20").join(" ").replace("%26", "&")}
      </h1>
      {!exams.length ? (
        <div className="W-fit mx-auto gap-7 text-center">
          <Image src={noExams} width={500} alt="No Exams" className="mx-auto" />
          <p className="mt-9 text-2xl">There are no exams in this topic.</p>
        </div>
      ) : (
        // Create exams

        <div className="flex flex-col gap-6">
          {exams.map((exam) => (
            <Quiz key={exam._id} id={exam._id} admin={admin} />
          ))}
        </div>
      )}
    </>
  );
}
