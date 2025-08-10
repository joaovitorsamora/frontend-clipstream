import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const HomePage = lazy(() => import('./App'))
const VideoDetailPage = lazy(() => import('./pages/VideoDetail'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div className="text-white text-center mt-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/VideoDetail/:id" element={<VideoDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
)
