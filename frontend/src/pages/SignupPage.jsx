import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log(data);

    // Later:
    // await fetch("http://localhost:3000/api/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex">

      {/* ================= LEFT PANEL ================= */}
      {/* Hidden on mobile, visible on large screens */}
      <div
        className="
          hidden
          lg:flex
          lg:w-[54%]
          min-h-[calc(100vh-64px)]
          rounded-r-[32px]
          bg-gradient-to-br
          from-indigo-400
          via-purple-500
          to-fuchsia-500
          items-center
          justify-center
          px-12
        "
      >
        <div className="w-full max-w-lg text-center text-white">

          {/* Heading */}
          <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight">
            Create an account
          </h1>

          <p className="mt-3 text-base text-white/80">
            Create your account and get started.
          </p>

          {/* User Illustration */}
          <div className="mt-14 flex justify-center">
            <div className="relative w-44 h-44 rounded-full border-2 border-white/90 flex items-center justify-center">

              {/* Head */}
              <div
                className="
                  absolute
                  top-[28%]
                  w-11
                  h-11
                  rounded-full
                  border-[3px]
                  border-white
                "
              />

              {/* Body */}
              <div
                className="
                  absolute
                  bottom-[21%]
                  w-24
                  h-14
                  rounded-t-[14px]
                  border-[3px]
                  border-white
                "
              />

            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT / SIGNUP PANEL ================= */}
      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          px-5
          py-10
          sm:px-8
          lg:px-12
          xl:px-20
        "
      >
        <div className="w-full max-w-md">

          {/* Form Heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
              Create account
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Enter your details to create your account.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-zinc-800"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  text-sm
                  text-zinc-900
                  placeholder:text-zinc-400
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-100
                "
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-zinc-800"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  text-sm
                  text-zinc-900
                  placeholder:text-zinc-400
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-100
                "
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-zinc-800"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  text-sm
                  text-zinc-900
                  placeholder:text-zinc-400
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-100
                "
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-zinc-800"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  text-sm
                  text-zinc-900
                  placeholder:text-zinc-400
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-100
                "
              />

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                h-12
                rounded-lg
                bg-indigo-600
                text-sm
                font-medium
                text-white
                transition
                hover:bg-indigo-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>

          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-zinc-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-700 transition"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignupPage;