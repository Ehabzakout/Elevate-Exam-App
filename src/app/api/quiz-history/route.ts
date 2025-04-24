import { NextResponse } from "next/server";
import exams from "./exams/exams.json";
export function GET() {
  return NextResponse.json({ exams });
}
