import { Play }from 'lucide-react'
import Cards from '../components/Cards'

const Homepage = () => {

  
  return (
    <>
      <main className="flex-1 p-6 pb-40">
        <h1 className='font-semibold text-3xl mt-5'>Recently played</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <img src="https://pbs.twimg.com/media/FqS9Jx4WwAMqrmj.jpg:large" alt="Capa Album" width={104} height={104} />
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
        </div>
        <h2 className='font-semibold text-3xl mt-10'>Made for you</h2>
        <div className="grid grid-cols-5 gap-4 my-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />          
        </div>
        <h2 className='font-semibold text-3xl mt-10'>Your top mixes</h2>
        <div className="grid grid-cols-5 gap-4 my-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />          
        </div>
                
      </main>
    </>
  )
}

export default Homepage