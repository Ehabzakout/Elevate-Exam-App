import AllSubjects from "@/components/features/subject/all-subjects";
import UserSummary from "@/components/features/user/user-summary";

// Home Page (dashboard)
export default function page() {
  return (
    <section className="flex w-full flex-col gap-10 leading-none">
      <UserSummary />
      <AllSubjects />
    </section>
  );
}
