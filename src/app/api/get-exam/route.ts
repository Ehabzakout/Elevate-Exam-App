import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//Route handler to get questions on exam
export async function GET(req: NextRequest) {
  // Get token

  const token = await getToken({ req });

  // Get search params

  const { searchParams } = new URL(req.url);

  // Get id from search param
  const id = searchParams.get("id");

  // Request to get questions
  const response = await fetch(
    `https://exam.elevateegy.com/api/v1/questions?exam=${id}`,
    { headers: { token: token!.token } },
  );
  const examQuestions = await response.json();

  return NextResponse.json(examQuestions);
}
