import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { Carousel } from '../Carousel'
import { useFetchData } from '../../hooks/useFetchData'
import { LinksProps } from '../../types'
import { useState } from 'react'
import axios from 'axios'

export const Articles = () => {
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

  const { articlesData } = useFetchData()

  return (
    <div className="w-full bg-black">
      <div className="max-w-[1920px] mx-auto p-[4%] rounded-t-[10px] ">
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            2560: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="relative"
        >
          {articlesData.map((item: LinksProps) => {
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
    </div>
  )
}
