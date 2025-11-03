

function Hero() {


  return (
    <header className="bg-[var(--color-primary)]/80 p-10 text-white flex overflow-hidden justify-between mb-10 h-[700px] rounded-b-xl 2xl:h-[700px] w-full">
      <div className="py-7 pl-10 flex flex-col gap-8 justify-between">
        <span className="p-5 text-left">Logo</span>
        <div className=" h-1/1 text-left max-w-120 " >
          <span className="font-extrabold text-7xl">Coffe <span className="ps-10 text-8xl">Power</span></span>
          <br/>
          <span className="font-bold text-xl ps-4 mt-8 flex flex-col gap-3">
            <span className="text-[var(--color-secondary)]/80 text-3xl">Encourage your customer</span>
            <p className="ps-7 ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </span>
          <div className="flex relative gap-8 py-10 z-10 font-bold w-screen px-10 text-3xl after:absolute after:bg-[var(--color-secondary)] after:h-3 after:w-[100%] after:z-2 after:-left-20 ">
            <button className="bg-[var(--color-primary)] hover:text-[var(--color-titles)] dark:bg-[var(--color-subtitles)] dark:text-[var(--color-secondary)]/80 dark:hover:text-[var(--color-subtitles)] hover:bg-[var(--color-secondary)] hover:cursor-pointer rounded-b-xl p-3 pt-6 transition ">Contact Us</button>
            <button className="bg-[var(--color-primary)] hover:text-[var(--color-titles)] dark:bg-[var(--color-subtitles)] dark:text-[var(--color-secondary)]/80 dark:hover:text-[var(--color-subtitles)] hover:bg-[var(--color-secondary)] hover:cursor-pointer rounded-b-xl p-3 pt-6 transition">Learn More</button>
            
          </div>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Hero
