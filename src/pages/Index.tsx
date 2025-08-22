import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                ALEX CARDOSO
                <br />
                <span className="text-accent">DE OLIVEIRA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Research Scientist specializing in Cell Biology, Cancer Research, and Drug Discovery. 
                Currently Senior Research Specialist at Bionet Therapeutics Corp.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="font-medium" onClick={() => navigate('/cv')}>
                  VIEW CV
                </Button>
                <Button variant="outline" size="lg" className="font-medium" onClick={() => navigate('/contact')}>
                  CONTACT
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Location:</span> Taipei City, Taiwan
                </div>
                <div>
                  <span className="font-medium">Specialization:</span> Cell Biology & Cancer Research
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-muted border-4 border-primary overflow-hidden">
                  <img 
                    src="/lovable-uploads/58cee83f-7f41-4692-a3ea-3ca6a87e666a.png"
                    alt="Alex Cardoso de Oliveira"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMjQwQzE4NC44NTMgMjQwIDIwNSAyMTkuODUzIDIwNSAxOTVDMjA1IDE3MC4xNDcgMTg0Ljg1MyAxNTAgMTYwIDE1MEMxMzUuMTQ3IDE1MCAxMTUgMTcwLjE0NyAxMTUgMTk1QzExNSAyMTkuODUzIDEzNS4xNDcgMjQwIDE2MCAyNDBaIiBmaWxsPSIjOUI5Qzk5Ii8+CjxwYXRoIGQ9Ik0xNjAgMTMwQzE4Mi4wOTEgMTMwIDIwMCAxMTIuMDkxIDIwMCA5MEM2NzLjkwODYgODAgNzUgOTcuOTA4NiA3NSAxMjBDNzUgMTQyLjA5MSA5Mi45MDg2IDE2MCAxMTUgMTYwQzEzNy4wOTEgMTYwIDE1NSAxNDIuMDkxIDE1NSAxMjBDMTU1IDk3LjkwODYgMTM3LjA5MSA4MCAxMTUgODBaIiBmaWxsPSIjOUI5Qzk5Ii8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">KEY HIGHLIGHTS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-sm font-medium">Languages</div>
                  <div className="text-xs text-muted-foreground mt-1">Including native Italian and advanced Chinese</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                  <div className="text-xs text-muted-foreground mt-1">In cell biology and cancer research</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3</div>
                  <div className="text-sm font-medium">Countries</div>
                  <div className="text-xs text-muted-foreground mt-1">Switzerland, Taiwan, and international experience</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">MSc</div>
                  <div className="text-sm font-medium">ETH Zurich</div>
                  <div className="text-xs text-muted-foreground mt-1">Cell Biology & Cancer Research</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Position Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">CURRENT POSITION</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-accent">Senior Research Specialist</h3>
                    <p className="text-muted-foreground">Bionet Therapeutics Corp. (2024 - 2025)</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Leading independent research projects in new drug discovery, combining wet lab expertise 
                    with comprehensive literature analysis. Contributing to the development of novel therapeutics 
                    and functional testing protocols.
                  </p>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Independent research project management</li>
                      <li>• New drug discovery and development</li>
                      <li>• Functional testing and validation</li>
                      <li>• Literature research and analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8 border-l-4 border-accent">
                <h3 className="text-lg font-semibold mb-4">Research Expertise</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Cell Biology</span>
                    <div className="w-20 h-2 bg-background">
                      <div className="w-full h-full bg-accent"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cancer Research</span>
                    <div className="w-20 h-2 bg-background">
                      <div className="w-full h-full bg-accent"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Drug Discovery</span>
                    <div className="w-20 h-2 bg-background">
                      <div className="w-4/5 h-full bg-accent"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Organoid Models</span>
                    <div className="w-20 h-2 bg-background">
                      <div className="w-4/5 h-full bg-accent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
