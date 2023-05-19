import CategoriesSearch from "../components/CategoriesSearch"


const Searchpage = () => {
  
 
  return (
    <div className="p-6 mb-40">     
      <CategoriesSearch />
      <h2 className="font-bold text-2xl mb-4">Browse all</h2>
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-podcasts p-4 w-52 h-52 rounded-xl">
          <h2 className="font-bold text-2xl">Podcasts</h2>
        </div>
        <div className="bg-liveEvents p-4 w-52 h-52 rounded-xl">
          <h2 className="font-bold text-2xl">Live Events</h2>
        </div>
        <div className="bg-madeForYou p-4 w-52 h-52 rounded-xl">
          <h2 className="font-bold text-2xl">Made For You</h2>
        </div>
        <div className="bg-newReleases p-4 w-52 h-52 rounded-xl">
          <h2 className="font-bold text-2xl">New Releases</h2>
        </div>
      </div>
    </div>
  )
}

export default Searchpage