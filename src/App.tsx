import React, { Suspense } from 'react'
import { Articles, SkeletonArticleCard, SkeletonVideoCard, Header } from './components/index'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSeachTerms } from './redux/video/actions'
import rootReducer from './redux/root-reducer'
import { ThunkDispatch } from 'redux-thunk'
import type { RootState } from './redux/store'
import { VideoAction } from './redux/video/reducer'
import { useFetchData } from './hooks/useFetchData'
import FilteredVideos from './components/FilteredVideos'

const App = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const { searchTerms } = useSelector((state: ReturnType<typeof rootReducer>) => state.videoReducer)

  const { loading } = useFetchData()

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachTerms(event.target.value))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen">
        <section className="relative w-full min-h-screen overflow-hidden bg-inherit">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-950 via-black to-indigo-950 animate-gradient-fade will-change-transform" />

          <div className="px-4 pt-8">
            <Header title="ClipStream" placeholder="Search here..." onChange={onChangeInput} value={searchTerms} />
          </div>

          <div className="relative z-10 px-4 pt-8">
            <Suspense fallback={<SkeletonVideoCard />}>{loading ? <SkeletonVideoCard /> : <FilteredVideos />}</Suspense>
          </div>
        </section>
        <Suspense fallback={<SkeletonArticleCard />}>{loading ? <SkeletonVideoCard /> : <Articles />}</Suspense>
      </main>

      <footer className="text-center py-6 bg-black text-white">Copyright 2025 &copy; - ClipStream</footer>
    </div>
  )
}

export default App
