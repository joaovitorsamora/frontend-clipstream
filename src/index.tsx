import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { App } from './App'
import { VideoDetail } from './pages/VideoDetail'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/VideoDetail/:id" element={<VideoDetail />} />
    </Routes>
  </BrowserRouter>
)
