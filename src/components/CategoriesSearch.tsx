

const CategoriesSearch = () => {
  return (
    <div className="flex flex-wrap items-center mb-4 gap-3">
        <button className='rounded-full px-3 py-1 text-black bg-white text-sm font-medium hover:scale-105'>
          All
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Songs
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Artists
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Podcasts & Shows
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Genres & Moods
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Profiles
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Playlists
        </button>
        <button className='rounded-full px-3 py-1 bg-zinc-800 text-sm font-medium hover:scale-105'>
          Albums
        </button>
    </div>
  )
}

export default CategoriesSearch