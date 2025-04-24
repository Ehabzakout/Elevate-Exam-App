import getToken from "@/lib/actions/get-token";
import { TExams } from "@/lib/types/exams";
import React from "react";
import Quiz from "./quiz-component";
import noExams from "@assets/images/noExams.webp";
import Image from "next/image";
import { TGetAllExams } from "@/lib/types/components-props";
import { APIResponse } from "@/lib/types/api";

// Get all exams component

export default async function GetAllExams({
  searchParam,
  admin,
}: TGetAllExams) {
  //Get token

  const token = await getToken();

  // if token  undefined

  if (!token) throw new Error("Un expected error");

  // Fetch all exams on subject

  const response = await fetch(`${process.env.BASIC_API}/exams`, {
    headers: { token },
  });
  const data: APIResponse<TExams> = await response.json();

  // Destruct response

  const { message, exams } = data;

  if (message !== "success") throw new Error("Can't fetch the exams");

  // Make a copy for data to use it in search

  let newData = exams;
  if (searchParam) {
    newData = newData.filter((exam) =>
      exam.title.toLocaleLowerCase().includes(searchParam),
    );
  }

  return (
    <>
      {/* Page title */}
      {!searchParam && (
        <h1 className="text-xl font-[500] capitalize">All Exams</h1>
      )}

      {!newData.length ? (
        // If this subject doesn't have exams

        <div className="W-fit mx-auto gap-7 text-center">
          <Image src={noExams} width={500} alt="No Exams" className="mx-auto" />
          <p className="mt-9 text-2xl">
            Sorry,There are no exams in this topic.
          </p>
        </div>
      ) : (
        // If this subject have exams

        <div className="flex flex-col gap-6">
          {newData.map((exam) => (
            <Quiz key={exam._id} id={exam._id} admin={admin} />
          ))}
        </div>
      )}
    </>
  );
}
