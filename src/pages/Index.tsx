
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
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
                Alex was born and raised in Ticino, Switzerland. During his Bachelor's at the University of Bern, he worked on <a href="https://pubmed.ncbi.nlm.nih.gov/37264368/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">T cell migration through the brain's barriers <ExternalLink size={16} /></a>. During his Master's at ETH Zurich, he worked on an organoid-based reporter system for cancer research. Since November 2022 he is based in Taipei, and has been working at Bionet (訊聯), a Taiwanese company specializing in exosome therapeutics and cosmetics.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="font-medium" onClick={() => navigate('/cv')}>
                  VIEW CV
                </Button>
                <Button variant="outline" size="lg" className="font-medium" onClick={() => navigate('/contact')}>
                  CONTACT
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Based:</span><br />
                  Taipei, Taiwan (2022-2025)<br />
                  Zurich, Switzerland (from December 2025)
                </div>
                <div>
                  <span className="font-medium">Focus:</span><br />
                  Exosome therapeutics, cancer biology, stem cell dynamics
                </div>
                <div>
                  <span className="font-medium">Expertise:</span><br />
                  Exosome therapeutics, cancer reporter systems
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-muted border-4 border-primary overflow-hidden">
                  <img 
                    src="/lovable-uploads/9b859530-b8f2-467b-b4cf-9960b6ff8404.png"
                    alt="Alex Cardoso de Oliveira"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMjQwQzE4NC44NTMgMjQwIDIwNSAyMTkuODUzIDIwNSAxOTVDMjA1IDE3MC4xNDcgMTg0Ljg1MyAxNTAgMTYwIDE1MEMxMzUuMTQ3IDE1MCAxMTUgMTcwLjE0NyAxMTUgMTk1QzExNSAyMTkuODUzIDEzNS4xNDcgMjQwIDE2MCAyNDBaIiBmaWxsPSIjOUI5Qzk5Ii8+CjxwYXRoIGQ9Ik0xNjAgMTMwQzE4Mi4wOTEgMTMwIDIwMCAxMTIuMDkxIDIwMCA5MEM2Ny45MDg2IDgwIDc1IDk3LjkwODYgNzUgMTIwQzc1IDE0Mi4wOTEgOTIuOTA4NiAxNjAgMTE1IDE2MEMxMzcuMDkxIDE2MCAxNTUgMTQyLjA5MSAxNTUgMTIwQzE1NSA5Ny45MDg2IDEzNy4wOTEgODAgMTE1IDgwWiIgZmlsbD0iIzlCOUM5OSIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
