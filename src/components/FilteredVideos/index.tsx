import { CardComponent } from '../CardComponent'
import { useFilteredVideos } from '../../hooks/useFilteredVideos'
import rootReducer from '../../redux/root-reducer'
import { useSelector } from 'react-redux'

const FilteredVideos = () => {
  const { videos, searchTerms } = useSelector((state: ReturnType<typeof rootReducer>) => state.videoReducer)
  const { filteredVideoList } = useFilteredVideos(videos, searchTerms)

  console.log(videos)

  return (
    <section
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        justify-items-center 
        gap-6 
        px-4 
        pt-6 
        2xl:gap-[20rem] 
        2xl:px-[8rem]
      "
    >
      {filteredVideoList.map((video) => (
        <CardComponent key={video.id} id={video.id} url={video.url} title={video.title} />
      ))}
    </section>
  )
}

export default FilteredVideos
