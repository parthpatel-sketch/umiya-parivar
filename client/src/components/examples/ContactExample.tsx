import { Contact } from '../Contact'
import { ThemeProvider } from '../ThemeProvider'

export default function ContactExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Contact />
      </div>
    </ThemeProvider>
  )
}