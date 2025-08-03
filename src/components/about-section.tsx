import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-fade-in">
          <CardContent className="p-8 sm:p-12">
            <h2 className="text-xs font-bold text-primary mb-8 animate-slide-up opacity-70">
              Who we are :
            </h2>
            <div className="space-y-6 text-xs leading-relaxed text-foreground animate-slide-up opacity-70">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We are <span className="font-semibold text-primary hover:text-primary-glow transition-colors duration-200">Sense.</span> - we are together building Mumbai's largest student led community - an initiative by large profit seeking companies college students for college students.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Here at <span className="font-semibold text-primary hover:text-primary-glow transition-colors duration-200">Sense.</span> You can talk sense with your peers who are pursuing the same goal as you - as we believe that the "growth" is when we are "together".
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Hence, if it's <span className="font-semibold hover:text-primary transition-colors duration-200">CA/CFA/CAT/GRE/GMAT/Student Exchange Programmes/Fests/Sports</span> or you just need a place where you can be you and find friends like you - there's <span className="font-semibold text-primary hover:text-primary-glow transition-colors duration-200">Sense.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}