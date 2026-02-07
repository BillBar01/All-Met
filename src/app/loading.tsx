export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h2 className="headline-stamp text-navy text-2xl mb-2 animate-pulse">
          Loading...
        </h2>
        <div className="h-1 w-24 bg-red mx-auto" />
      </div>
    </div>
  );
}
