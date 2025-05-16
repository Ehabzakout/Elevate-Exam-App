export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <span className="loader mt-20"></span>
      <p className="text-xl font-semibold text-primary">Please Wait</p>
    </div>
  );
}
