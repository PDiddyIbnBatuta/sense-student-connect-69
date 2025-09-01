import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Welcome Header */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">
            Welcome to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sense.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are together connecting colleges across Mumbai which is an initiative{" "}
            <span className="font-semibold text-foreground">by students, for students</span>.
          </p>
        </div>

        {/* Large Sense branding */}
        <div className="py-16 animate-scale-in">
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight animate-float">
            Sense.
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="space-y-8 max-w-4xl mx-auto animate-slide-up">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            A friendly and welcoming space where you can
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg text-muted-foreground">
            <div className="space-y-2">
              <span className="font-medium text-primary">✨</span> Share your career journeys
            </div>
            <div className="space-y-2">
              <span className="font-medium text-primary">💬</span> Chat about professional exams
            </div>
            <div className="space-y-2">
              <span className="font-medium text-primary">🚀</span> Discover exciting opportunities
            </div>
            <div className="space-y-2">
              <span className="font-medium text-primary">🤝</span> Tackle college challenges together
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-slide-up">
          <a 
            href="https://linktr.ee/sense.mumbai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 transform font-medium"
            >
              Join the Community
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}