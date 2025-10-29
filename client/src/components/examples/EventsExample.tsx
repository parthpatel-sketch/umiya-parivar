import { Events } from '../Events'
import { ThemeProvider } from '../ThemeProvider'

export default function EventsExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Events />
      </div>
    </ThemeProvider>
  )
}