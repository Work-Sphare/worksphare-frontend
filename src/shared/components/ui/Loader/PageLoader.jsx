import Loader from "./Loader";

const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="flex flex-col items-center">
        <Loader size={48} />

        <h2 className="mt-6 text-xl font-bold text-slate-800">
          Loading...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait a moment.
        </p>
      </div>
    </div>
  );
};

export default PageLoader;