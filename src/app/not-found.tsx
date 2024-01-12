export default function NotFound() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex items-center">
        <h1 className="inline-block mr-5 pr-5 text-2xl fw-500 va-top lh-49">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-sm fw-400 lh-49">
            This page could not be found.{" "}
            <a href="/" className="underline inline-block ml-5 pl-5 text-sm fw-400 lh-49 text-teal-600 dark:text-teal-300">
              Return Home
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
