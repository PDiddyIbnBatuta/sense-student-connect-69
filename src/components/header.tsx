import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="/" className="font-bold text-2xl text-primary hover:text-primary-glow hover:scale-105 transition-all duration-300 transform">
            Sense.
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-foreground hover:text-primary hover:scale-105 transition-all duration-200 transform relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-medium"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-foreground hover:text-primary hover:scale-105 transition-all duration-200 transform relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-medium"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-foreground hover:text-primary hover:scale-105 transition-all duration-200 transform relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-medium"
            >
              Contact
            </a>
            <div className="hover:scale-105 transition-transform duration-200">
              <ThemeToggle />
            </div>
          </nav>
          <div className="md:hidden hover:scale-105 transition-transform duration-200">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}