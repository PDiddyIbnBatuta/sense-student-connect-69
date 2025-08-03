import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main hero text */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground">
            Clear the fuss of college life...
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
            Stop listening to countless videos on youtube..you just need real people like you..
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Join Sense.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Follow the revolution with 30000 other students who have also joined the revolution
          </p>
        </div>

        {/* Large Sense branding */}
        <div className="py-16 animate-scale-in">
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight animate-float">
            Sense
          </h2>
        </div>

        {/* Secondary message */}
        <div className="space-y-6 max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground">
            Doing/Want to do CFA? CA? Confused? Too many videos - still no guidance???
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Be a part of a community lead by people just like you..
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">
            Join Sense.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-slide-up">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 transform"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  )
}