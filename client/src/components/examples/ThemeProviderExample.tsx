import { ThemeProvider } from '../ThemeProvider'
import { ThemeToggle } from '../ThemeToggle'

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-background text-foreground">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Theme Provider Example</h3>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          This demonstrates the theme toggle functionality. Click the theme toggle button to switch between light and dark modes.
        </p>
      </div>
    </ThemeProvider>
  )
}