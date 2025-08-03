import { Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-fade-in">
          <CardContent className="p-8 sm:p-12 text-center">
            <h2 className="text-xs font-bold text-primary mb-8 animate-slide-up opacity-70">
              Get in Touch
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs animate-scale-in opacity-70">
              <Mail className="h-6 w-6 text-primary animate-float" />
              <a 
                href="mailto:sense.mumbai@gmail.com" 
                className="text-primary hover:text-primary-glow hover:scale-105 transition-all duration-300 font-medium transform"
              >
                sense.mumbai@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}