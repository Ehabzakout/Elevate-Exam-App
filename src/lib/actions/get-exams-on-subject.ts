"use server";

import { TExams } from "../types/exams";
import getToken from "./get-token";

export default async function getExamsOnSubject(id: string) {
  // Get Token

  const token = await getToken();

  // if token or id undefiend
  if (!token && !id) throw new Error("Un expected error");

  if (token) {
    // Fetch all exams on subject
    const response = await fetch(
      `${process.env.BASIC_API}/exams?subject=${id}`,
      {
        headers: { token },
      },
    );

    const exams: TExams = await response.json();
    return exams;
  }
}
