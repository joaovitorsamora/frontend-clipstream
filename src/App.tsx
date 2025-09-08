import React, { Suspense } from 'react'
import { Articles, SkeletonArticleCard, SkeletonVideoCard } from './components/index'
import './App.css'
import { useFetchData } from './hooks/useFetchData'
import FilteredVideos from './components/FilteredVideos'

const App = () => {
  const { loading } = useFetchData()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen">
        <div className="relative z-10 px-4 pt-8">
          <Suspense fallback={<SkeletonVideoCard />}>{loading ? <SkeletonVideoCard /> : <FilteredVideos />}</Suspense>
        </div>
        <Suspense fallback={<SkeletonArticleCard />}>{loading ? <SkeletonVideoCard /> : <Articles />}</Suspense>
      </main>
    </div>
  )
}

export default App
