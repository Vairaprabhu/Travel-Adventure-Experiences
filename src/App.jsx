import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components'
import { HomePage, DiscoverPage, DestinationsPage, DestinationPage, ExperiencesPage, ExperiencePage, JournalPage, ArticlePage, PlanPage, NotFoundPage } from './pages'

function PageMotion({ children }) {
  const reduceMotion = useReducedMotion()
  return <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>{children}</motion.div>
}

export default function App() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <PageMotion key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:slug" element={<DestinationPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/experiences/:slug" element={<ExperiencePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<ArticlePage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageMotion>
      </AnimatePresence>
    </Layout>
  )
}
