import getToken from "@/lib/actions/get-token";
import { TAllSubject } from "@/lib/types/all-subjects";
import { APIResponse } from "@/lib/types/api";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../common/loading";

export default async function AllSubjects() {
  // Get  token

  const token = await getToken();

  // Fetching all subjects
  const req = await fetch(`${process.env.Basic_API}/subjects`, {
    headers: {
      token,
    },
    next: { tags: ["getAllSubjects"] },
  });
  const { subjects, message }: APIResponse<TAllSubject> = await req.json();

  if (message !== "success")
    throw new Error("Network Error can't fetch subjects");

  return (
    <>
      <div className="flex flex-col gap-6 rounded-3xl bg-white px-4 py-8 shadow-[0_15px_40px_0px_#0000000D]">
        {/* title */}

        <div className="flex items-center justify-between text-2xl font-[500] text-primary">
          <p>Quizzes</p>
          <Link href="dashboard/all-exams">
            <p>View All</p>
          </Link>
        </div>

        {/*Generate subjects links  */}
        <Suspense fallback={<Loading />}>
          <div className="mx-auto flex flex-wrap justify-center gap-5">
            {subjects &&
              subjects.map((subject) => (
                <Link
                  href={`dashboard/${subject.name}/${subject._id}`}
                  key={subject._id}
                  className="relative w-fit overflow-hidden rounded-lg"
                >
                  <Image
                    src={subject.icon}
                    alt={"Quiz Image"}
                    width={330}
                    height={292}
                  />

                  {/* Subject info */}
                  <div className="absolute bottom-7 mx-7 rounded-lg bg-[#1935CA66] p-4 text-white">
                    <h1 className="text-sm font-bold">{subject.name}</h1>
                    <p className="text-xs">
                      Voluptatem aut ut dignissimos blanditiis
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Suspense>
      </div>
    </>
  );
}
