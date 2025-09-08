import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { DefaultPage } from './components/DefaultPage'
import { ProtectedRoutes } from './components/ProtectedRoutes'

const HomePage = lazy(() => import('./App'))
const VideoDetailPage = lazy(() => import('./pages/VideoDetail'))

function AppWrapper() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-4">Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultPage className="bg-gradient-to-br from-purple-950 via-black to-indigo-950">
              <HomePage />
            </DefaultPage>
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="pages/VideoDetail/:id"
            element={
              <DefaultPage className="bg-black text-white">
                <VideoDetailPage />
              </DefaultPage>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Router>
      <AppWrapper />
    </Router>
  </Provider>
)
