import { Card, CardContent } from "@/components/ui/card"

export function WhoWeAreSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Who are{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              we?
            </span>
          </h2>
          <div className="text-6xl animate-bounce">🤔</div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Story Card */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up">
            <CardContent className="p-12 text-center space-y-8">
              <div className="flex justify-center space-x-4 text-4xl mb-6">
                <span className="animate-bounce delay-100">👥</span>
                <span className="animate-bounce delay-200">💭</span>
                <span className="animate-bounce delay-300">💡</span>
              </div>
              
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-medium">
                We are a group of students from various colleges in Mumbai who grew tired of trying to{" "}
                <span className="bg-destructive/10 px-2 py-1 rounded-lg text-destructive font-bold">
                  "figure it all out"
                </span>{" "}
                on our own.
              </p>
              
              <div className="text-5xl animate-pulse">😤</div>
              
              <p className="text-2xl font-bold text-primary">
                That's why we created Sense.!
              </p>
            </CardContent>
          </Card>

          {/* Community Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-bold text-foreground">
                A friendly and welcoming space where you can:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <span className="text-3xl">🗣️</span>
                  <span className="text-lg font-medium text-foreground">Share your career journeys</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <span className="text-3xl">💬</span>
                  <span className="text-lg font-medium text-foreground">Chat about professional exams</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <span className="text-3xl">🚀</span>
                  <span className="text-lg font-medium text-foreground">Discover exciting opportunities</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <span className="text-3xl">🤝</span>
                  <span className="text-lg font-medium text-foreground">Tackle college challenges together</span>
                </div>
              </div>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="text-8xl mb-8">🎯</div>
              <div className="p-8 bg-gradient-primary rounded-2xl text-white">
                <p className="text-2xl font-bold mb-4">No cap! 💯</p>
                <p className="text-lg opacity-90">
                  We're building something different - a space where students actually help students. 
                  It's giving main character energy! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}