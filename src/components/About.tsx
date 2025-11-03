

function Hero() {


  return (
    <main className="p-10 text-white flex justify-around items-center h-[600px] rounded-xl mb-10 2xl:h-[500px] w-full">
      <div className="h-full w-4/6 m-2">
        <img src="https://images.unsplash.com/photo-1622240506921-042a4e71c172?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Hero Image" className="h-full w-full object-cover rounded-xl"/>
      </div>
      <div className="bg-red-500 h-full w-full m-2"></div>
    </main>
  )
}

export default Hero
