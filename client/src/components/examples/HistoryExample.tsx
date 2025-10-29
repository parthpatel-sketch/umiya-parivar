import { History } from '../History'
import { ThemeProvider } from '../ThemeProvider'

export default function HistoryExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <History />
      </div>
    </ThemeProvider>
  )
}