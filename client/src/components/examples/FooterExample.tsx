import { Footer } from '../Footer'
import { ThemeProvider } from '../ThemeProvider'

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 p-8">
          <h3 className="text-lg font-semibold mb-4">Footer Component</h3>
          <p className="text-muted-foreground">
            This shows the temple footer with contact information, quick links, and social media.
          </p>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}