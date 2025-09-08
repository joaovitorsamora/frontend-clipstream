import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Carousel } from '../Carousel'
import { useFetchData } from '../../hooks/useFetchData'
import { LinksProps } from '../../types'
import { useState } from 'react'
import axios from 'axios'

export const Articles = () => {
  const [countViews, setCountViews] = useState<Record<number, number>>({})
  const { articlesData } = useFetchData()

  const handleClickLink = async (url: string, id: number) => {
    try {
      const response = await axios.patch(`https://backend-clipstream.vercel.app/api/articles/${id}`, { views: true })
      setCountViews((prev) => ({ ...prev, [id]: response.data.views }))
      window.open(url, '_blank')
    } catch (error) {
      console.error('Erro ao atualizar views:', error)
    }
  }

  return (
    <section className="w-full">
      <div className="w-screen -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)] bg-black py-8">
        <div className="max-w-[1920px] mx-auto px-[4%] rounded-t-[10px]">
          <Swiper
            modules={[Navigation]}
            navigation
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              2560: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="relative w-full"
          >
            {articlesData.map((item: LinksProps) => (
              <SwiperSlide key={item.id} className="w-auto">
                <Carousel
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  onClickLink={handleClickLink}
                  site={item.site}
                  url={item.url}
                  views={countViews[item.id] ?? item.views}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
