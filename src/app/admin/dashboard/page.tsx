import AllSubjects from "@/components/features/all-subjects";

// Admin dashboard page
export default function page() {
  return (
    <section className="flex w-full flex-col gap-10 leading-none">
      <AllSubjects />
    </section>
  );
}
