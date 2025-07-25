import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Rocket, 
  Lightbulb, 
  Heart, 
  Leaf, 
  Coins,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleRegisterClick = () => {
    // TODO: Implement registration modal or redirect
    console.log('Registration clicked - implement registration flow');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 relative hero-bg-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--purple-deep)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo Placeholder */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center text-[var(--purple-deep)] text-2xl font-bold shadow-lg">
            CV
          </div>
          
          {/* Pixelated Main Heading */}
          <h1 className="pixelated-font text-white text-6xl md:text-8xl lg:text-9xl mb-4">
            Creaovibe
          </h1>
          
          {/* Subheading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-[var(--text-primary)]">
            Build. Create. Thrive.
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Building an ecosystem of top builders.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={handleRegisterClick}
            size="lg"
            className="bg-white text-[var(--purple-deep)] hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold"
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Buildathon Section */}
        <section className="section-animate py-20">
          <div className="max-w-6xl mx-auto px-5">
            {/* Section Header */}
            <div className="text-center mb-15">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center flex-wrap gap-3">
                <Hammer className="pixel-icon hammer w-8 h-8 text-[var(--purple-primary)]" />
                Upcoming Buildathons
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                Join our community of builders and create something amazing together
              </p>
            </div>

            {/* Buildathon 0.1 Content */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12 lg:p-16">
                {/* Buildathon Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Creaovibe Buildathon 0.1 – August 2025
                  </h3>
                </div>

                {/* About Section */}
                <div className="mb-12 text-center">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                    About the Buildathon
                  </h4>
                  <p className="text-lg text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed mb-6">
                    Our inaugural buildathon brings together the brightest student minds to solve real-world challenges. 
                    Over the course of several weeks, participants will ideate, build, and present innovative solutions 
                    across three crucial sectors that shape our future.
                  </p>
                  <Button 
                    onClick={handleRegisterClick}
                    size="lg"
                    className="bg-white text-[var(--purple-deep)] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
                  >
                    Register Now
                  </Button>
                </div>

                {/* Three Finale Themes */}
                <div className="mb-12">
                  <h4 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white flex items-center justify-center flex-wrap gap-3">
                    <Rocket className="pixel-icon rocket w-8 h-8 text-blue-300" />
                    Finale Themes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Healthtech Theme */}
                    <Card className="bg-white/20 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <h5 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                          <Heart className="w-6 h-6 text-pink-300" />
                          Healthtech
                        </h5>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Revolutionize healthcare through innovative technology solutions that improve patient outcomes and accessibility.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Sustainability Theme */}
                    <Card className="bg-white/20 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <h5 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                          <Leaf className="w-6 h-6 text-green-300" />
                          Sustainability
                        </h5>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Create sustainable solutions that address environmental challenges and promote eco-friendly practices.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Fintech Theme */}
                    <Card className="bg-white/20 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <h5 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                          <Coins className="w-6 h-6 text-yellow-300" />
                          Fintech
                        </h5>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Build the future of financial services with cutting-edge technology and user-centric design.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white flex items-center justify-center flex-wrap gap-3">
                    <Lightbulb className="pixel-icon lightbulb w-8 h-8 text-yellow-300" />
                    Timeline
                  </h4>
                  <div className="relative pl-8 md:pl-10">
                    {/* Timeline Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-deep)]"></div>
                    
                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {/* Registration Phase */}
                      <div className="relative">
                        <div className="absolute -left-3 top-7 w-3 h-3 rounded-full bg-[var(--purple-primary)] border-4 border-white shadow-md"></div>
                        <Card className="ml-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
                          <CardContent className="p-6">
                            <div className="text-sm font-semibold text-white/80 mb-2">
                              July 15 - August 1, 2025
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                              Registration Phase
                            </div>
                            <div className="text-white/90 text-sm">
                              Open registration for all student participants. Form teams and submit your initial project ideas.
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Ideation & Planning */}
                      <div className="relative">
                        <div className="absolute -left-3 top-7 w-3 h-3 rounded-full bg-[var(--purple-primary)] border-4 border-white shadow-md"></div>
                        <Card className="ml-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
                          <CardContent className="p-6">
                            <div className="text-sm font-semibold text-white/80 mb-2">
                              August 5 - August 12, 2025
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                              Ideation & Planning
                            </div>
                            <div className="text-white/90 text-sm">
                              Refine your concepts, conduct market research, and develop comprehensive project plans with mentorship support.
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Building Phase */}
                      <div className="relative">
                        <div className="absolute -left-3 top-7 w-3 h-3 rounded-full bg-[var(--purple-primary)] border-4 border-white shadow-md"></div>
                        <Card className="ml-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
                          <CardContent className="p-6">
                            <div className="text-sm font-semibold text-white/80 mb-2">
                              August 15 - August 29, 2025
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                              Building Phase
                            </div>
                            <div className="text-white/90 text-sm">
                              Two weeks of intensive development. Build your MVP, conduct user testing, and iterate based on feedback.
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Finals Week */}
                      <div className="relative">
                        <div className="absolute -left-3 top-7 w-3 h-3 rounded-full bg-[var(--purple-primary)] border-4 border-white shadow-md"></div>
                        <Card className="ml-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
                          <CardContent className="p-6">
                            <div className="text-sm font-semibold text-white/80 mb-2">
                              September 1 - September 5, 2025
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                              Finals Week
                            </div>
                            <div className="text-white/90 text-sm">
                              Present your projects to industry experts. Pitch competitions across all three themes with cash prizes and internship opportunities.
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Winners Announcement */}
                      <div className="relative">
                        <div className="absolute -left-3 top-7 w-3 h-3 rounded-full bg-[var(--purple-primary)] border-4 border-white shadow-md"></div>
                        <Card className="ml-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
                          <CardContent className="p-6">
                            <div className="text-sm font-semibold text-white/80 mb-2">
                              September 8, 2025
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                              Winners Announcement
                            </div>
                            <div className="text-white/90 text-sm">
                              Grand celebration and networking event. Winners receive cash prizes, mentorship programs, and startup incubation opportunities.
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Final CTA */}
                <div className="text-center mt-12">
                  <Button 
                    onClick={handleRegisterClick}
                    size="lg"
                    className="bg-white text-[var(--purple-deep)] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-12 py-4 rounded-full font-semibold text-xl"
                  >
                    Register Now for Buildathon 0.1
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--text-primary)] text-white py-10">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p className="mb-4">&copy; 2025 Creaovibe. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-white hover:text-[var(--purple-primary)] transition-colors duration-300" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[var(--purple-primary)] transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[var(--purple-primary)] transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[var(--purple-primary)] transition-colors duration-300" aria-label="Discord">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
