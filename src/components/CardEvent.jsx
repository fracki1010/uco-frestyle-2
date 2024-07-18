

// eslint-disable-next-line react/prop-types
export function CardEvent({title, imageUrl, date}){
  return (
    <div><div className=" cursor-pointer group relative items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black/30 rounded-2xl">
    <div className="h-96 w-auto">
      <img
        className="h-full w-full object-cover transition-transform duration-500 rotate-3 group-hover:scale-125"
        src={imageUrl}
        alt=""
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b   from-black/40 via-black/30 to-black/50"></div>
    <div className="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all  translate-y-0">
      <h1 className="font-dmserif text-xl md:text-3xl font-bold text-white rock-salt-regular">
        {title}
      </h1>
      <p className="mb-3 text-base md:text-lg italic text-white  transition-opacity duration-300 ">
        {date}
      </p>
    </div>
    
  </div></div>
  )
}
