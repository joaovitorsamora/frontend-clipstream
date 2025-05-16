import { useEffect, useState } from 'react'

interface VideoData {
  id: number
  url: string
  title: string
  description?: string
}

export const useFilteredVideos = (videos: VideoData[], searchTerms: string) => {
  const [filteredVideoList, setFilteredVideoList] = useState<VideoData[]>(videos)

  useEffect(() => {
    if (!searchTerms.trim()) {
      setFilteredVideoList(videos)
    } else {
      const filtered = videos?.filter((video) => video.title.toLowerCase().includes(searchTerms.toLowerCase()))
      setFilteredVideoList(filtered)
    }
  }, [videos, searchTerms])

  return {
    filteredVideoList,
  }
}
