import { ChevronLeft, ChevronRight, User2, Search as SearchIcon }from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Search = () => {
   const location = useLocation()

  return (
    <div 
        className='flex items-center justify-between p-4 z-50 bg-zinc-800'
    >
        <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft size={30} />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight size={30} />
            </button>
            {location.pathname === "/search" && (
                <div className='flex items-center relative'>
                    <div className='absolute left-2'>
                        <SearchIcon size={20} />
                    </div>
                    <input 
                        type="text" 
                        placeholder='What do you want to listen to?'
                        className='w-96 text-lg text-slate-300 rounded-full px-9 py-2 bg-black/40'
                    />
                </div>
            )}
        </div>
        <div className='flex gap-3'>
            <button className='rounded-full px-4 text-black text-sm bg-white font-bold hover:scale-105'>
                Upgrade
            </button>
            <button className='rounded-full bg-black/40 p-2 hover:scale-105'>
                <User2 size={20} />
            </button>
        </div>
    </div>
  )
}

export default Search