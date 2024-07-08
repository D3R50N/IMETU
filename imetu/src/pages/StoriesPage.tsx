import  { StoriesGrid, Story } from '../components/Stories'

function StoriesPage({ stories}: { stories: (Story | null)[] }){
  return (
      <>
          <div className="navbar bg-base-100 px-10">
              <div className="flex-1 items-center gap-2">
                  <h1 className="font-bold text-2xl uppercase text-center underline underline-offset-8">All stories</h1> 
                  <span className='font-bold text-xl uppercase'>({stories.length })</span>
              </div>
              <div className="flex-none gap-2">
                  <div className="form-control">
                      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                  </div>
                 
              </div>
          </div>
            
          <StoriesGrid stories={stories}/>
      </>
  )
}



export default StoriesPage