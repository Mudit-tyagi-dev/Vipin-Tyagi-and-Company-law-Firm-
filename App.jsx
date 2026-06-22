import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import HomePage from '@/pages/HomePage'
// import CityPage from '@/pages/CityPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased overflow-x-hidden bg-background">
        {/* <SmoothScrollProvider> */}
          <Header />
          <main className="overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/locations/:city" element={<CityPage />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        {/* </SmoothScrollProvider> */}
      </div>
    </BrowserRouter>
  )
}
