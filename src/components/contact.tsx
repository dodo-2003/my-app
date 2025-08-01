import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  MessageSquare,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Ready to transform your data into intelligent conversations? Let's discuss your AI project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ← wrap this in a real form */}
          <div className="lg:col-span-2">
            <form
              action="https://formspree.io/f/mqabrryz"  /* ← my Formspree URL */
              method="POST"
            >
              {/* hidden reply-to field so you can reply in your inbox */}
              <input type="hidden" name="_replyto" />

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-mono">Start Your AI Project</CardTitle>
                  <CardDescription className="font-mono">
                    Tell me about your data, requirements, and vision. I'll help you build the perfect AI solution.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono">Name</Label>
                      <Input
                        id="name"
                        name="name"                     /* ← name attr */
                        placeholder="Your name"
                        className="font-mono border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono">Email</Label>
                      <Input
                        id="email"
                        name="email"                    /* ← name attr */
                        type="email"
                        placeholder="your@email.com"
                        className="font-mono border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="font-mono">Project Type</Label>
                    <Input
                      id="project"
                      name="project"                  /* ← name attr */
                      placeholder="e.g., RAG System, OCR Integration"
                      className="font-mono border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"                  /* ← name attr */
                      placeholder="Describe your data, requirements, and goals..."
                      className="min-h-[120px] font-mono border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"                   /* ← submit the form */
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-mono"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start Conversation
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* sidebar with direct links and social icons */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-mono font-medium">Direct Contact</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono mb-4">
                  Prefer direct communication? Reach out directly for immediate response.
                </p>
                <a href="mailto:your@email.com">
                  <Button variant="outline" className="w-full font-mono border-primary/50 hover:bg-primary/5">
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-ai-green" />
                  <span className="font-mono font-medium">Schedule Call</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono mb-4">
                  Book a 30-minute consultation to discuss your AI project in detail.
                </p>
                {/* replace with your calendly/meeting link */}
                <a href="https://calendly.com/yourusername/30min" target="_blank" rel="noopener">
                  <Button variant="outline" className="w-full font-mono border-ai-green/50 hover:bg-ai-green/5">
                    Book Meeting
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-mono font-medium mb-4">Connect</h3>
                <div className="flex gap-3">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener">
                    <Github className="h-5 w-5 hover:text-primary transition" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
                    <Linkedin className="h-5 w-5 hover:text-primary transition" />
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener">
                    <Twitter className="h-5 w-5 hover:text-primary transition" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}