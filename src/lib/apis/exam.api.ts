import { TExams } from "../types/exams";
import getToken from "../utils/get-token";

export async function getExamsOnSubject(id: string) {
  // Get Token
  const token = await getToken();

  // if token or id undefined
  if (!token || !id) throw new Error("Un expected error");

  // Fetch all exams on subject
  const response = await fetch(`${process.env.BASIC_API}/exams?subject=${id}`, {
    headers: { token },
  });

  const exams: TExams = await response.json();
  return exams;
}
