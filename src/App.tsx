import './index.css'

import { DarkModeProvider } from './providers/dark-mode'
import { AppRouterProvider } from './providers/router'

function App() {
  return (
    <DarkModeProvider>
      <AppRouterProvider />
    </DarkModeProvider>
  )
}

export default App
