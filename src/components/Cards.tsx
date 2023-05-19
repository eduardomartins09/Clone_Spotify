

const Cards = () => {
  return (
    <div className="bg-white/5 p-3 rounded-md flex flex-col cursor-pointer gap-2 hover:bg-white/10">
        <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" className='w-full' width={120} height={120} alt="Capa album" />
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
    </div>
  )
}

export default Cards