

const Header = () => {
  return (
    <div className="min-h-20 py-2 px-4 flex justify-start lg:justify-center">
      <div className="content-container flex items-center justify-between">
        <div className="logo ">
          {/* <img src="" alt="logo" /> */}
          <div className=" text-5xl py-4 px-8 bg-slate-200/25 antaliased font-bold tracking-widest relative mix-blend-screen hover:scale-105 transition">MRCSBCLS</div>
        </div>
        <div className="nav">
          <ul className="list-style-none gap-6 text-3xl hidden lg:flex transition tracking-wide ">
            <li className="hover:scale-105 transition "><a href="#home">Home</a></li>
            <li className="hover:scale-105 transition "><a href="#about">About</a></li>
            <li className="hover:scale-105 transition "> <a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header