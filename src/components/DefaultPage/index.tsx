import { Footer } from '../Footer'
import { Header } from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../redux/store'
import { VideoAction } from '../../redux/video/reducer'
import { setSeachTerms } from '../../redux/video/actions'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'

type DefaultPageProps = {
  children?: React.ReactNode
  className?: string
}

export const DefaultPage = ({ children, className }: DefaultPageProps) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const { searchTerms } = useSelector((state: RootState) => state.videoReducer)

  return (
    <div className={clsx("w-full min-h-screen flex flex-col", className)}>
      <Header
        title="ClipStream"
        placeholder="Search here..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setSeachTerms(event.target.value))
        }
        value={searchTerms}
      />

      <main className="flex-grow w-full max-w-screen-xl mx-auto">
        <Outlet />
        {children}
      </main>

      <Footer />
    </div>
  )
}
