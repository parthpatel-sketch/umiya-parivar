import { Navigation } from '../Navigation'
import { ThemeProvider } from '../ThemeProvider'

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Navigation Component</h3>
          <p className="text-muted-foreground">
            This shows the temple navigation with logo, menu items, and theme toggle. 
            Try clicking the mobile menu button on smaller screens.
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}