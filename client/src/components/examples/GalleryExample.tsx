import { Gallery } from '../Gallery'
import { ThemeProvider } from '../ThemeProvider'

export default function GalleryExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Gallery />
      </div>
    </ThemeProvider>
  )
}