import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AudienceSection() {
  const audiences = [
    {
      emoji: "🎯",
      title: "10th grade student",
      description: "figuring out streams"
    },
    {
      emoji: "🎓", 
      title: "JC kid",
      description: "confused about careers and colleges"
    },
    {
      emoji: "🚀",
      title: "Degree college student", 
      description: "hustling through fests, CVs and internships"
    },
    {
      emoji: "📚",
      title: "Postgrad student",
      description: "navigating advanced opportunities"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="space-y-8 mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            If you're a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              student
            </span>
          </h2>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2 border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl mb-4">{audience.emoji}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="space-y-8 animate-scale-in">
          <div className="p-8 bg-gradient-primary rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              This is your sign to follow us!
            </h3>
            <p className="text-lg mb-8 opacity-90">
              We're just getting started, and Sense only grows stronger with{" "}
              <span className="font-bold text-white underline decoration-white/50">YOU</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 font-medium"
              >
                Join Our Community
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white/10 font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}