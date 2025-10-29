import { Hero } from '../Hero'
import { ThemeProvider } from '../ThemeProvider'

export default function HeroExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Hero />
      </div>
    </ThemeProvider>
  )
}