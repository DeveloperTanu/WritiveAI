const AiNotesPreview = () => {
  const prompts = [
    "Summarize these lecture notes into clear, easy-to-study points.",
    "Turn this long document into structured notes with headings.",
    "Extract key takeaways and action items from these meeting notes.",
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-100 py-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-28">

          {/* ================================================= */}
          {/* LEFT SIDE                                         */}
          {/* PREVIEW + BUTTONS                                */}
          {/* ================================================= */}

          <div className="order-2 flex w-full flex-col items-center lg:order-1 lg:items-start">

            {/* Static Preview */}

            <div className="relative w-full max-w-[560px]">

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-5
                  rounded-[2rem]
                  bg-indigo-100/50
                  blur-2xl
                "
              />

              {/* Floating Icon */}

              <div
                className="
                  absolute
                  -right-3
                  -top-8
                  z-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  shadow-xl
                  shadow-indigo-200/40
                  sm:h-16
                  sm:w-16
                  lg:-right-5
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
                    rounded-lg
                    bg-gradient-to-br
                    from-indigo-500
                    to-purple-600
                    shadow-md
                  "
                >
                  {/* Notes icon */}

                  <div className="flex w-6 flex-col gap-1">
                    <span className="h-1 w-full rounded-full bg-white" />
                    <span className="h-1 w-full rounded-full bg-white" />
                    <span className="h-1 w-4/5 rounded-full bg-white" />
                  </div>

                  <span className="absolute -right-2 -top-3 text-sm text-indigo-500">
                    ✦
                  </span>
                </div>
              </div>

              {/* App Window */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-2xl
                  shadow-zinc-300/50
                "
              >

                {/* Window Header */}

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
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

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
                      <span className="text-[10px] text-white">
                        ✦
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-zinc-800">
                      AI Notes
                    </span>

                  </div>

                  <div className="ml-auto flex gap-3 text-xs text-zinc-400">
                    <span className="hidden sm:block">—</span>
                    <span className="hidden sm:block">□</span>
                    <span>×</span>
                  </div>
                </div>

                {/* Toolbar */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-zinc-100
                    px-4
                    py-2.5
                    sm:px-5
                  "
                >
                  <div className="flex items-center gap-4 text-[10px] text-zinc-500 sm:text-xs">
                    <span>File</span>
                    <span>Edit</span>
                    <span>Font</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="h-4 w-4 rounded-full bg-yellow-400" />
                    <span className="h-4 w-4 rounded-full bg-red-400" />
                    <span className="h-4 w-4 rounded-full bg-blue-400" />
                  </div>
                </div>

                {/* Notes Content */}

                <div className="p-3 sm:p-4">

                  <div
                    className="
                      min-h-[220px]
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      p-3
                      shadow-sm
                      sm:min-h-[250px]
                      sm:p-4
                    "
                  >
                    <div className="space-y-1 text-[8px] leading-[1.55] text-zinc-600 sm:text-[9px]">

                      <p className="font-semibold text-zinc-800">
                        Computer Science — Summary Notes
                      </p>

                      <p>
                        1. Basics of Computer Science
                      </p>

                      <p className="pl-3">
                        • Computer = electronic machine that processes data
                        and performs tasks based on instructions.
                      </p>

                      <p className="pl-3">
                        • Hardware: Physical components such as CPU, RAM,
                        HDD/SSD, motherboard, etc.
                      </p>

                      <p className="pl-3">
                        • Software: Operating systems and applications.
                      </p>

                      <p>
                        2. Data & Information
                      </p>

                      <p className="pl-3">
                        • Data: Raw, unprocessed facts.
                      </p>

                      <p className="pl-3">
                        • Information: Processed and organized data.
                      </p>

                      <p>
                        3. Memory & Storage
                      </p>

                      <p className="pl-3">
                        • Primary Memory: RAM, Cache memory.
                      </p>

                      <p className="pl-3">
                        • Secondary Memory: HDD, SSD, cloud storage.
                      </p>

                      <p>
                        4. Programming Fundamentals
                      </p>

                      <p className="pl-3">
                        • Variables, data types, operators and control flow.
                      </p>

                      <p className="pl-3">
                        • Functions help organize reusable logic.
                      </p>

                    </div>
                  </div>

                  {/* AI Prompt Bar */}

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      p-2
                      shadow-sm
                      sm:p-2.5
                    "
                  >

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-indigo-500
                        to-purple-500
                        text-white
                        shadow-md
                      "
                    >
                      ✦
                    </div>

                    <span className="min-w-0 flex-1 truncate text-[9px] text-zinc-500 sm:text-xs">
                      Summarize me Basics of computer science
                    </span>

                    <div
                      className="
                        flex
                        h-8
                        shrink-0
                        items-center
                        rounded-md
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600
                        px-3
                        text-[9px]
                        font-medium
                        text-white
                        sm:text-xs
                      "
                    >
                      Send →
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}

            <div
              className="
                mt-6
                flex
                w-full
                max-w-[560px]
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <button
                className="
                  min-h-12
                  flex-1
                  rounded-md
                  bg-blue-500
                  px-6
                  py-3
                  text-sm
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

          {/* ================================================= */}
          {/* RIGHT SIDE                                        */}
          {/* CONTENT                                            */}
          {/* ================================================= */}

          <div className="order-1 w-full max-w-xl lg:order-2">

            <h2
              className="
                text-4xl
                font-semibold
                tracking-tight
                text-zinc-950
                sm:text-5xl
                xl:text-6xl
              "
            >
              AI Notes
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
              Boring Notes? Let AI handle them.
              <br />
              Turn long content into clear, organized notes instantly.
            </p>

            <p className="mt-3 text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              AI Notes summarizes documents, lectures, and meetings into
              structured, easy-to-understand notes you can save, edit,
              and reuse—so you focus on learning, not rewriting.
            </p>

            {/* Practice Prompts */}

            <div className="mt-12">

              <h3 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                Practice prompts
              </h3>

              <div className="mt-5 space-y-2.5">

                {prompts.map((prompt, index) => (
                  <div
                    key={prompt}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-zinc-600
                      sm:text-base
                    "
                  >
                    <span className="shrink-0 font-medium text-zinc-800">
                      {index + 1}.
                    </span>

                    <span>
                      “{prompt}”
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

export default AiNotesPreview;