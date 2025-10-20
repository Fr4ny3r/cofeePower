import { useState } from 'react'


function Hero() {


  return (
    <header className="bg-[var(--color-primary)]/80 p-10 text-white flex justify-between h-[80dvh] 2xl:h-[60dvh] w-full">
      <div className="py-7 flex flex-col gap-8 justify-between">
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
          <div className="flex justify-center gap-8 py-10 text-[var(--color-secondary)]/80 font-bold text-3xl">
            <button className="bg-[var(--color-subtitles)]  hover:cursor-pointer p-4 rounded-xl transition">Contact Us</button>
            <button className="bg-[var(--color-subtitles)] hover:brightness-110 hover:cursor-pointer p-4 rounded-xl transition">Learn More</button>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Hero
