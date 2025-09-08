import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VideoProps } from '../../types'
import { Card, CardContent, CardFooter } from '../../ui/Card/card'

export const CardComponent: React.FC<VideoProps> = ({ id, title }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    sessionStorage.setItem('canAccessVideo', 'true')
    navigate(`/pages/VideoDetail/${id}`)
  }

  return (
    <div onClick={handleClick} className="flex flex-col rounded-[4px] w-full overflow-hidden pt-8 cursor-pointer">
      <Card className="bg-transparent shadow-none border-none p-0 flex flex-col min-w-full justify-center items-center">
        <CardContent className="p-0 relative z-10 will-change-auto w-full aspect-video">
          <img
            src={`/thumbnails/${id}.jpeg`}
            alt={title}
            className="w-full h-full object-cover rounded-[4px] bg-black"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.271 11.972V4.028L11.25 8l-4.979 3.972z" />
              </svg>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-[0.9rem] no-underline text-white text-[0.98rem] font-bold">{title}</CardFooter>
      </Card>
    </div>
  )
}
