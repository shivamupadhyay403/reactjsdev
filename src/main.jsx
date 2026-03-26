import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TooltipProvider } from '@/components/ui/tooltip'
import './index.css'
import App from './App.jsx'

const isDev = import.meta.env.VITE_APP_MODE === 'development'
const Wrapper = isDev ? StrictMode : ({ children }) => children

createRoot(document.getElementById('root')).render(
  <Wrapper>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </Wrapper>
)