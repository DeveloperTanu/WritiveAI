import LandingAppCard from "./LandingAppCard";
import { Link } from "react-router-dom";

const LandingPageContent = () => {
  return (
    <>
      <div className="flex justify-center py-20">
        <div className="space-y-4 text-center px-10 sm:px-0">
          <h1 className="text-3xl font-medium text-zinc-600 bg-zinc-300/30 w-fit p-2 rounded-full">
            “Tired of typing emails, stories, and documents manually?”
          </h1>
          <p className="text-lg text-zinc-600 font-semibold">
            Let Writive AI write them for you —{" "}
            <span className="text-blue-600">
              faster, smarter, and effortlessly.
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center px-10 md:px-40 mb-10">
        <div className="flex gap-x-4">
          <button className="text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 px-12 py-2.5 rounded-lg duration-100 cursor-pointer font-medium shadow-sm hover:shadow-md">
            Try for free
          </button>

          <Link
            to="/pricing"
            className="flex gap-x-3 py-2.5 px-5 items-center text-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-lg duration-100 cursor-pointer font-medium"
          >
            Pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      <LandingAppCard />
    </>
  );
};

export default LandingPageContent;
