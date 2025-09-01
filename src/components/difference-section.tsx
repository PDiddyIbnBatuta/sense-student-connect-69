export function DifferenceSection() {
  const expectations = [
    "You're expected to get a degree.",
    "You're expected to land an internship.", 
    "You're expected to have it all figured out."
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            What makes us{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              different?
            </span>
          </h2>
          <div className="text-5xl animate-pulse">🤔💭</div>
          <p className="text-xl text-muted-foreground italic">
            Spoiler alert: We're not like other communities 💅
          </p>
        </div>

        {/* Expectations vs Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Expectations */}
          <div className="space-y-8 animate-slide-up">
            {expectations.map((expectation, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-destructive/5 border border-destructive/20">
                <span className="text-2xl text-destructive">⚠️</span>
                <p className="text-xl font-medium text-foreground">
                  {expectation}
                </p>
              </div>
            ))}
            
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🤷‍♀️</div>
              <p className="text-2xl font-bold text-destructive">
                Yet no one tells you{" "}
                <span className="underline decoration-destructive/50">how</span>.
              </p>
              <p className="text-lg text-muted-foreground mt-2 italic">
                It's giving "good luck figuring it out yourself" energy 😮‍💨
              </p>
            </div>
          </div>

          {/* Right: Our Solution */}
          <div className="space-y-8 animate-scale-in">
            <div className="p-8 bg-gradient-primary rounded-2xl text-white">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-6">
                That's why we're building a student powered network 🚀
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-lg">Top achievers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🗣️</span>
                  <span className="text-lg">The unheard voices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">👨‍🏫</span>
                  <span className="text-lg">Mentors from teaching backgrounds</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-lg font-medium mb-2">
                  So every student gets the answers they've been looking for.
                </p>
                <p className="text-base opacity-90">
                  No more "this exam will change your life" without the how-to guide! 📖✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}