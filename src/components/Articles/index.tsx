import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Carousel } from '../Carousel'
import { useFetchData } from '../../hooks/useFetchData'
import { LinksProps } from '../../types'
import { useMemo, useState } from 'react'
import axios from 'axios'
import './styles.css'
export const Articles = () => {
  const urls = useMemo(
    () => ['https://backend-clipstream.vercel.app/videos', 'https://backend-clipstream.vercel.app/api/articles'],
    []
  )

  const [countViews, setCountViews] = useState(0)

  const handleClickLink = async (url: string, id: number) => {
    try {
      const response = await axios.patch(`https://backend-clipstream.vercel.app/api/articles/${id}`, {
        views: true,
      })
      setCountViews((prev: any) => ({ ...prev, [id]: response.data.views }))
      window.open(url, '_blank')
    } catch (error) {
      console.error('Erro ao atualizar views:', error)
    }
  }

  const { previewData } = useFetchData({ urls })

  return (
    <div className="articles">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {previewData.map((item: LinksProps) => {
          return (
            <SwiperSlide key={item.id}>
              <Carousel
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                onClickLink={() => handleClickLink(item.url, item.id)}
                site={item.site}
                url={item.url}
                views={item.views}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
function setCountViews(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.')
}
