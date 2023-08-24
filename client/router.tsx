import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Resources from './components/Resources'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="resources" element={<Resources />} />
    </Route>,
  ),
)

export default router
