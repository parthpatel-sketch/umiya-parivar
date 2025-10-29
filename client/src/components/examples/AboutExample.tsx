import { About } from '../About'
import { ThemeProvider } from '../ThemeProvider'

export default function AboutExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <About />
      </div>
    </ThemeProvider>
  )
}