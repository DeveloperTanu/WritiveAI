const AiMailPreview = () => {
  const prompts = [
    {
      number: "01",
      text: "Write a professional email to my manager requesting a day off next Friday.",
    },
    {
      number: "02",
      text: "Create a polite follow-up email for a client who hasn't replied in a week.",
    },
    {
      number: "03",
      text: "Write a friendly introduction email to a new team member.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-100 py-16 sm:py-20 lg:py-28">
      {/* ========================================================= */}
      {/* BACKGROUND DECORATION                                     */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-indigo-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-purple-100/40
          blur-3xl
        "
      />

      {/* ========================================================= */}
      {/* MAIN CONTAINER                                             */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid
            items-start
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ===================================================== */}
          {/* LEFT SIDE                                              */}
          {/* PREVIEW + BUTTONS                                     */}
          {/* ===================================================== */}

          <div className="relative flex w-full flex-col items-center lg:items-start">
            {/* Preview glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-6
                rounded-[2rem]
                bg-gradient-to-br
                from-indigo-200/40
                via-purple-200/30
                to-transparent
                blur-2xl
              "
            />

            {/* ================================================= */}
            {/* FLOATING AI ICON                                  */}
            {/* ================================================= */}

            <div
              className="
                absolute
                -right-2
                -top-8
                z-20
                hidden
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-indigo-100
                bg-white
                shadow-xl
                shadow-indigo-200/40
                sm:flex
                lg:-right-4
                lg:-top-8
                xl:-right-8
              "
            >
              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-500
                  to-purple-600
                  shadow-md
                  shadow-indigo-200
                "
              >
                {/* Envelope */}
                <div className="relative h-5 w-7 overflow-hidden rounded bg-white">
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[-6px]
                      h-4
                      w-4
                      -translate-x-1/2
                      rotate-45
                      bg-indigo-400
                    "
                  />
                </div>

                {/* Sparkles */}
                <span
                  className="
                    absolute
                    -right-2
                    -top-3
                    text-xs
                    font-bold
                    text-indigo-500
                  "
                >
                  ✦
                </span>

                <span
                  className="
                    absolute
                    -left-2
                    top-0
                    text-[9px]
                    font-bold
                    text-purple-500
                  "
                >
                  ✦
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* STATIC APPLICATION PREVIEW                        */}
            {/* ================================================= */}

            <div
              className="
                relative
                w-full
                max-w-[620px]
                overflow-hidden
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-2xl
                shadow-zinc-300/50
              "
            >
              {/* ================================================= */}
              {/* WINDOW HEADER                                      */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  h-11
                  items-center
                  border-b
                  border-zinc-100
                  bg-zinc-50
                  px-4
                  sm:h-12
                  sm:px-5
                "
              >
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                {/* App name */}
                <div className="ml-5 flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-md
                      bg-gradient-to-br
                      from-indigo-500
                      to-purple-600
                    "
                  >
                    <span className="text-[10px] text-white">✦</span>
                  </div>

                  <span className="text-sm font-semibold text-zinc-800">
                    AI Mail
                  </span>
                </div>

                {/* Fake window controls */}
                <div className="ml-auto flex items-center gap-4 text-xs text-zinc-400">
                  <span className="hidden sm:block">—</span>
                  <span className="hidden sm:block">□</span>
                  <span>×</span>
                </div>
              </div>

              {/* ================================================= */}
              {/* APPLICATION CONTENT                                */}
              {/* ================================================= */}

              <div className="p-4 sm:p-6">
                {/* To */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="w-12 shrink-0 text-xs font-medium text-zinc-500">
                    To
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      min-w-0
                      flex-1
                      items-center
                      overflow-hidden
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-700
                      shadow-sm
                      sm:text-sm
                    "
                  >
                    developer@gmail.com
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-3 flex items-center gap-3 sm:gap-4">
                  <span className="w-12 shrink-0 text-xs font-medium text-zinc-500">
                    Subject
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      min-w-0
                      flex-1
                      items-center
                      overflow-hidden
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-700
                      shadow-sm
                      sm:text-sm
                    "
                  >
                    A policy email regarding our company
                  </div>
                </div>

                {/* ================================================= */}
                {/* EMAIL EDITOR                                      */}
                {/* ================================================= */}

                <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  {/* Toolbar */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-zinc-100
                      px-3
                      py-2.5
                    "
                  >
                    <div className="flex items-center gap-3 text-xs font-medium text-zinc-500">
                      <span className="font-bold">B</span>

                      <span className="font-serif italic">I</span>

                      <span className="underline">U</span>

                      <span className="hidden sm:block">↗</span>

                      <span className="hidden h-4 w-px bg-zinc-200 sm:block" />

                      <span className="hidden sm:block">☷</span>

                      <span className="hidden sm:block">☰</span>
                    </div>

                    {/* Static AI control */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-500">
                      <span>✦</span>

                      <span className="hidden sm:block">Edit with AI</span>
                    </div>
                  </div>

                  {/* Email body */}
                  <div
                    className="
                      min-h-[220px]
                      p-4
                      text-xs
                      leading-6
                      text-zinc-700
                      sm:min-h-[250px]
                      sm:p-5
                      sm:text-sm
                    "
                  >
                    <p>Hi Developer,</p>

                    <p className="mt-2">We hope this message finds you well.</p>

                    <p className="mt-2">
                      We're writing to inform you about our company's policies
                      and ensure that everything remains clear and smooth for
                      everyone.
                    </p>

                    <p className="mt-2">
                      Please review the information carefully and let us know if
                      you have any questions or need further clarification.
                    </p>

                    <p className="mt-3">
                      Thank you for your time and cooperation.
                    </p>

                    <p className="mt-3">
                      Best regards,
                      <br />
                      Brandon Klein
                      <br />
                      Manager
                    </p>
                  </div>
                </div>

                {/* ================================================= */}
                {/* AI ACTIONS                                        */}
                {/* ================================================= */}

                <div className="mt-3 flex flex-wrap gap-2">
                  <div
                    className="
                      flex
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-600
                    "
                  >
                    Improve
                    <span className="text-zinc-400">⌄</span>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-600
                    "
                  >
                    Shorten
                    <span className="text-zinc-400">⌄</span>
                  </div>

                  <div
                    className="
                      hidden
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-600
                      sm:flex
                    "
                  >
                    Make Friendly
                    <span className="text-zinc-400">⌄</span>
                  </div>

                  <div
                    className="
                      hidden
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      text-xs
                      text-zinc-600
                      md:flex
                    "
                  >
                    Fix Spelling
                    <span className="text-zinc-400">⌄</span>
                  </div>
                </div>

                {/* ================================================= */}
                {/* BOTTOM CONTROLS                                   */}
                {/* ================================================= */}

                <div className="mt-4 flex items-center justify-between">
                  {/* AI button */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-indigo-100
                      bg-indigo-50
                      text-indigo-500
                    "
                  >
                    ✦
                  </div>

                  {/* Right controls */}
                  <div className="flex gap-2">
                    <div
                      className="
                        flex
                        h-9
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-indigo-100
                        bg-indigo-50
                        px-3
                        text-xs
                        font-medium
                        text-indigo-600
                      "
                    >
                      <span className="hidden sm:block">Schedule</span>

                      <span>⌄</span>
                    </div>

                    <div
                      className="
                        flex
                        h-9
                        w-11
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600
                        text-white
                        shadow-md
                        shadow-indigo-200
                      "
                    >
                      ➤
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA BUTTONS — BELOW PREVIEW                      */}
            {/* ================================================= */}

            <div className="mt-6 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row">
              <button
                className="
      min-h-12
      flex-1
      bg-blue-500
      px-6
      py-3
      text-sm
      rounded-md
      font-semibold
      text-white
      shadow-lg
      shadow-indigo-200/40
      transition
      hover:-translate-y-0.5
      hover:bg-blue-400
      hover:shadow-xl
      active:bg-blue-600
    "
              >
                Try Free
              </button>

              <button
                className="
      min-h-12
      flex-1
      rounded-md
      border
      border-zinc-200
      bg-white
      px-6
      py-3
      text-sm
      font-semibold
      text-zinc-800
      shadow-sm
      transition
      hover:-translate-y-0.5
      hover:border-indigo-200
      hover:bg-indigo-50
      focus:outline-none
      focus:ring-2
      focus:ring-blue-600
      focus:ring-offset-2
    "
              >
                Get Premium
              </button>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE                                             */}
          {/* CONTENT                                                */}
          {/* ===================================================== */}

          <div className="w-full max-w-xl lg:pt-2">
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-100
                bg-indigo-50
                px-3.5
                py-1.5
                text-xs
                font-semibold
                text-indigo-600
              "
            >
              <span>✦</span>
              AI-powered writing
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                text-zinc-950
                sm:text-5xl
                xl:text-6xl
                xl:leading-[1.05]
              "
            >
              AI Mail
            </h2>

            {/* Main description */}
            <p
              className="
                mt-6
                text-xl
                font-medium
                leading-8
                text-zinc-800
                sm:text-2xl
                sm:leading-9
              "
            >
              Write better emails in seconds with the power of AI.
            </p>

            {/* Supporting description */}
            <p
              className="
                mt-5
                text-base
                leading-7
                text-zinc-500
                sm:text-lg
                sm:leading-8
              "
            >
              AI Mail helps you create clear, professional, and polished emails
              for work, business, or personal use— without overthinking every
              word.
            </p>

            <p
              className="
                mt-3
                text-base
                leading-7
                text-zinc-500
                sm:text-lg
                sm:leading-8
              "
            >
              Simply describe your message, choose a tone, and AI Mail instantly
              generates high-quality emails that sound confident, natural, and
              effective.
            </p>

            {/* ================================================= */}
            {/* PRACTICE PROMPTS                                  */}
            {/* ================================================= */}

            <div className="mt-12">
              <div>
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-zinc-950
                  "
                >
                  Practice prompts
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Try these with AI Mail
                </p>
              </div>

              {/* Prompt cards */}
              <div className="mt-5 space-y-3">
                {prompts.map((prompt) => (
                  <div
                    key={prompt.number}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-zinc-200
                      bg-white
                      p-4
                      shadow-sm
                      transition
                      duration-200
                      hover:-translate-y-0.5
                      hover:border-indigo-200
                      hover:shadow-md
                      hover:shadow-indigo-100/40
                    "
                  >
                    {/* Number */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-50
                        text-xs
                        font-semibold
                        text-indigo-600
                      "
                    >
                      {prompt.number}
                    </div>

                    {/* Prompt */}
                    <p
                      className="
                        flex-1
                        text-sm
                        leading-6
                        text-zinc-600
                        sm:text-[15px]
                      "
                    >
                      {prompt.text}
                    </p>

                    {/* Arrow */}
                    <span
                      className="
                        shrink-0
                        text-zinc-300
                        transition
                        group-hover:translate-x-1
                        group-hover:text-indigo-500
                      "
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMailPreview;
