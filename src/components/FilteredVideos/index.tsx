import { useState } from 'react'
import { Card } from '../Card'
import { useFilteredVideos } from '../../hooks/useFilteredVideos'
import rootReducer from '../../redux/root-reducer'
import { useSelector } from 'react-redux'
import './styles.css'

export const FilteredVideos = () => {
  const { videos, searchTerms } = useSelector((state: ReturnType<typeof rootReducer>) => state.videoReducer)
  const [loading, setLoading] = useState(true)
  const { filteredVideoList } = useFilteredVideos(videos, searchTerms)

  return (
    <div>
      {loading ? (
        (setTimeout(() => setLoading(false), 2000), (<p>Loading...</p>))
      ) : (
        <section className="video-list">
          {filteredVideoList.map((video, index) => {
            return (
              <div className="card" key={index}>
                <Card id={video.id} url={video.url} title={video.title} />
              </div>
            )
          })}
        </section>
      )}
    </div>
  )
}
