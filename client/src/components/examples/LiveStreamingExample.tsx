import { LiveStreaming } from '../LiveStreaming'
import { ThemeProvider } from '../ThemeProvider'

export default function LiveStreamingExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <LiveStreaming />
      </div>
    </ThemeProvider>
  )
}