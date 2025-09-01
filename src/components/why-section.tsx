import { Card, CardContent } from "@/components/ui/card"

export function WhySection() {
  const challenges = [
    {
      icon: "📚",
      title: "Exam Confusion",
      description: "You come across exams like CFA, CAT, and JEE yet you feel lost about what to choose and where to start your preparation."
    },
    {
      icon: "🌍",
      title: "Exchange Programs",
      description: "Dreaming of a student exchange program? It's challenging when you don't know whom to approach for guidance."
    },
    {
      icon: "🎓",
      title: "Knowledge Gaps",
      description: "Many college courses leave you with gaps in your knowledge and skill set, which can be frustrating and demoralizing."
    },
    {
      icon: "🎉",
      title: "Festival Info",
      description: "Exciting college festivals catch your eye? Although, getting detailed information can be tricky, leaving you in the dark."
    },
    {
      icon: "👥",
      title: "Finding Your Tribe",
      description: "Or maybe... you simply just want to meet people who truly get you."
    }
  ]

  const solutions = [
    "Making student life a little less confusing",
    "Bringing more fun into learning", 
    "Encouraging growth through teamwork and collaboration"
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Why we{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              started?
            </span>
          </h2>
          <div className="flex justify-center space-x-4 text-5xl">
            <span className="animate-bounce">😩</span>
            <span className="animate-bounce delay-100">😤</span>
            <span className="animate-bounce delay-200">🔥</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Being a student today hits different - and not in a good way:
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center space-y-8 animate-scale-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            We're on a mission to tackle these key challenges together by:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <p className="text-lg font-medium text-foreground">
                  {solution}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-primary rounded-2xl text-white max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-xl sm:text-2xl font-bold mb-4">
              At Sense., we talk about the stuff{" "}
              <span className="underline decoration-white/50">colleges skip</span>. 💯
            </p>
            <p className="text-lg opacity-90 mb-4">
              We believe that when students lend a helping hand to each other, everyone comes out ahead!
            </p>
            <p className="text-lg font-bold">
              It's giving community vibes! ✨🤝
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}