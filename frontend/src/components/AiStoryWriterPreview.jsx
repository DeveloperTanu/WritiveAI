const AiStoryWriterPreview = () => {
  const prompts = [
    "Write a short fantasy story about a forgotten kingdom.",
    "Create a blog post about the future of artificial intelligence.",
    "Write a motivational story about overcoming failure.",
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-100 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            md:gap-16
            lg:grid-cols-2
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ================================================= */}
          {/* LEFT — PREVIEW + BUTTONS                         */}
          {/* ================================================= */}

          <div
            className="
              order-2
              flex
              w-full
              flex-col
              items-center
              lg:order-1
              lg:items-start
            "
          >
            {/* Preview wrapper */}
            <div className="relative w-full max-w-[560px]">
              {/* Soft background glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-[2rem]
                  bg-indigo-100/60
                  blur-2xl
                "
              />

              {/* Floating icon */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-7
                  z-20
                  sm:-right-4
                  sm:-top-8
                  lg:-right-5
                "
              >
                <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  {/* Book */}
                  <div className="relative flex items-end">
                    <div
                      className="
                        h-7
                        w-7
                        origin-bottom-right
                        -rotate-[35deg]
                        rounded-bl-lg
                        rounded-tr-sm
                        bg-gradient-to-br
                        from-indigo-500
                        to-indigo-700
                        shadow-lg
                        sm:h-8
                        sm:w-8
                      "
                    />

                    <div
                      className="
                        h-7
                        w-7
                        origin-bottom-left
                        rotate-[35deg]
                        rounded-br-lg
                        rounded-tl-sm
                        bg-gradient-to-br
                        from-indigo-400
                        to-purple-600
                        shadow-lg
                        sm:h-8
                        sm:w-8
                      "
                    />
                  </div>

                  {/* Sparkles */}
                  <span className="absolute -right-1 -top-4 text-base text-orange-400 sm:-right-2 sm:text-lg">
                    ✦
                  </span>

                  <span className="absolute -left-2 -top-1 text-xs text-indigo-500 sm:text-sm">
                    ✦
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* STATIC APP PREVIEW                                */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-xl
                  shadow-zinc-300/40
                  sm:rounded-[18px]
                "
              >
                {/* Window header */}
                <div
                  className="
                    flex
                    h-10
                    items-center
                    border-b
                    border-zinc-100
                    bg-zinc-50
                    px-3
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
                  <div className="ml-4 flex items-center gap-2 sm:ml-5">
                    <div
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-md
                        bg-gradient-to-br
                        from-indigo-500
                        to-purple-600
                        sm:h-6
                        sm:w-6
                      "
                    >
                      <span className="text-[8px] text-white sm:text-[10px]">
                        ✦
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-zinc-800 sm:text-sm">
                      AI Story Writer
                    </span>
                  </div>

                  {/* Window controls */}
                  <div className="ml-auto flex gap-2 text-[10px] text-zinc-400 sm:gap-3 sm:text-xs">
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
                    gap-3
                    border-b
                    border-zinc-100
                    px-3
                    py-2
                    sm:gap-5
                    sm:px-5
                    sm:py-2.5
                  "
                >
                  <span
                    className="
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-indigo-400
                      text-[8px]
                      text-white
                    "
                  >
                    ✎
                  </span>

                  <span
                    className="
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-red-400
                      text-[8px]
                      text-white
                    "
                  >
                    H
                  </span>

                  <span
                    className="
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-zinc-800
                      text-[8px]
                      text-white
                    "
                  >
                    ●
                  </span>

                  <div className="ml-auto h-2.5 w-16 rounded-full bg-zinc-800 sm:h-3 sm:w-24" />
                </div>

                {/* Story editor */}
                <div className="p-2.5 sm:p-4">
                  <div
                    className="
                      min-h-[185px]
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
                    <div
                      className="
                        space-y-1
                        text-[7px]
                        leading-[1.55]
                        text-zinc-600
                        sm:text-[9px]
                      "
                    >
                      <p>
                        Long ago, in the kingdom of Eldoria, nestled between
                        misty mountains and deep emerald forests, there was a
                        young girl named Elara.
                      </p>

                      <p className="mt-2">
                        The kingdom was peaceful and beautiful, but Elara
                        carried a secret no one knew.
                      </p>

                      <p className="mt-2">
                        She had discovered an ancient forgotten magic hidden
                        deep beneath the old castle.
                      </p>

                      <p className="mt-2">
                        For years, she had searched for the truth behind the
                        mysterious symbols carved into the castle walls.
                      </p>

                      <p className="mt-2">
                        One evening, as the sun disappeared beyond the
                        mountains, the symbols began to glow.
                      </p>

                      <p className="mt-2">
                        Elara stepped closer and placed her hand against the
                        ancient stone.
                      </p>

                      <p className="mt-2">
                        Suddenly, the entire room filled with brilliant light.
                      </p>

                      <p className="mt-2">
                        And somewhere far beneath the kingdom, something
                        awakened.
                      </p>
                    </div>
                  </div>

                  {/* AI prompt */}
                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      p-2
                      shadow-sm
                      sm:gap-3
                      sm:p-2.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-indigo-500
                        to-purple-500
                        text-sm
                        text-white
                        shadow-md
                        sm:h-9
                        sm:w-9
                      "
                    >
                      ✦
                    </div>

                    <span
                      className="
                        min-w-0
                        flex-1
                        truncate
                        text-[8px]
                        text-zinc-500
                        sm:text-xs
                      "
                    >
                      Write a story on The Knight of the Silver Glan
                    </span>

                    <div
                      className="
                        flex
                        h-7
                        shrink-0
                        items-center
                        rounded-md
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600
                        px-2.5
                        text-[8px]
                        font-medium
                        text-white
                        sm:h-8
                        sm:px-3
                        sm:text-xs
                      "
                    >
                      Send →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA BUTTONS                                       */}
            {/* ================================================= */}

            <div
              className="
                mt-5
                grid
                w-full
                max-w-[560px]
                grid-cols-1
                gap-3
                sm:mt-6
                sm:grid-cols-2
              "
            >
              <button
                className="
                  w-full
                  rounded-md
                  bg-blue-500
                  px-6
                  py-3.5
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
                  w-full
                  rounded-md
                  border
                  border-zinc-200
                  bg-white
                  px-6
                  py-3.5
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
          {/* RIGHT — CONTENT                                   */}
          {/* ================================================= */}

          <div
            className="
              order-1
              w-full
              max-w-xl
              lg:order-2
              lg:pt-8
              xl:pt-12
            "
          >
            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-950
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              AI Story Writer
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-zinc-700
                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              Get your imagination on words in seconds with the power of AI.
            </p>

            <p
              className="
                mt-2
                text-base
                leading-7
                text-zinc-500
                sm:text-lg
                sm:leading-8
              "
            >
              AI Story Writer helps you create stories, blogs, and creative
              content effortlessly—from quick ideas to full-length pieces.
              Just start with a prompt, and let AI shape it into engaging,
              high-quality writing.
            </p>

            {/* Practice prompts */}
            <div className="mt-9 sm:mt-12">
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  text-zinc-950
                  sm:text-2xl
                "
              >
                Practice prompts
              </h3>

              <div className="mt-4 space-y-3 sm:mt-5">
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

                    <span>“{prompt}”</span>
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

export default AiStoryWriterPreview;