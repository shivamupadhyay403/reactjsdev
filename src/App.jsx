import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { PublicRoutes } from './routes/PublicRoutes'
import { Suspense } from 'react'
import { Spinner } from './components/ui/spinner'

const NotFound = React.lazy(() => import('./pages/NotFound'))
const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            <Route path="*" key="not-found" element={<NotFound />} />
            {PublicRoutes.map((item) => (
              <Route
                key={item.key}
                element={<item.Component />}
                path={item.path}
              />
            ))}
            {PrivateRoutes.map((item) => (
              <Route
                key={item.key}
                element={<item.Component />}
                path={item.path}
              />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
