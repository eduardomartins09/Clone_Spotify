import { Home, Search, Library, Dot, Plus, ArrowRight }from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <aside className="w-96 bg-zinc-950 p-4">
      <div className='flex items-center mb-6 cursor-pointer'>
        <Dot />
        <Dot />
        <Dot />
      </div>
      <nav className='space-y-5 bg-zinc-900 p-6 rounded-xl mb-4'>
        <div className='flex items-center gap-3 text-sm font-semibold text-zinc-200 cursor-pointer' onClick={() => navigate("/")}>
            <Home />
            Home
        </div>
        <div className='flex items-center gap-3 text-sm font-semibold text-zinc-200 cursor-pointer' onClick={() => navigate("/search")}>
            <Search />
            Search
        </div>           
      </nav>
      <nav className='space-y-5 bg-zinc-900 p-6 rounded-xl'>
        <div className='flex items-center justify-between text-sm font-semibold text-zinc-200'>
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate("/library")}>
            <Library />
            Your Library
          </div>
          <div className='flex items-center gap-2'>
            <Plus />
            <ArrowRight />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar