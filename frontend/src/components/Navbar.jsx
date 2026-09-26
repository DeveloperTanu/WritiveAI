import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-10 sm:px-40 backdrop-blur-md bg-zinc-100/50 border-b border-zinc-200 sticky top-0 z-50 items-center">
        <Link className="flex items-center gap-x-4" to="/">
          <img className="w-8 h-8" src="/logo.svg" alt="" />
          <p className="text-lg font-medium text-blue-600">Writive AI</p>
        </Link>

      <div className="flex gap-x-4 items-center">
        <div className="relative group h-full items-center p-2">
          <button className="flex gap-x-2 cursor-pointer duration-100 h-full items-center">
            Apps
            <span className="relative size-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute inset-0 opacity-100 group-hover:opacity-0 duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute inset-0 opacity-0 group-hover:opacity-100 duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </button>

          <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white border border-zinc-200 rounded-md p-2 shadow-md min-w-32">
            <Link
              to="/aimail"
              className="px-3 py-2 rounded-md whitespace-nowrap hover:bg-blue-50 hover:text-blue-600 duration-100"
            >
              AI Mail
            </Link>

            <Link
              to="/ainotes"
              className="px-3 py-2 rounded-md whitespace-nowrap hover:bg-blue-50 hover:text-blue-600 duration-100"
            >
              AI Notes
            </Link>

            <Link
              to="/aistory"
              className="px-3 py-2 rounded-md whitespace-nowrap hover:bg-blue-50 hover:text-blue-600 duration-100"
            >
              AI Story
            </Link>
          </div>
        </div>

        <Link className="p-2" to="/pricing">
          Pricing
        </Link>

        <Link to="/login" className="p-2">
          Login
        </Link>

        <div className="flex items-center gap-x-2 bg-blue-500 cursor-pointer hover:bg-blue-400 active:bg-blue-600 rounded-full p-2 text-white duration-100">
          <Link className="cursor-pointer" to="/signup">
            SignUp
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
