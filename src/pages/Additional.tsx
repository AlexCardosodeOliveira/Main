
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Layout from "@/components/Layout";

const Additional = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Additional Information</h1>
          <p className="text-muted-foreground text-lg">Personal interests and diverse experiences</p>
        </header>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Amateur Photographer</h3>
                  <p className="text-accent font-medium">Focus on Taiwan's Indigenous tribal rituals and culture</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground font-mono">2023 - Present</span>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img 
                        src="/lovable-uploads/37f8facd-fbc6-496e-8fba-b8922777065f.png" 
                        alt="Taiwan Indigenous tribal ritual - Traditional ceremony" 
                        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-full max-h-full p-0 bg-black/90">
                      <img 
                        src="/lovable-uploads/37f8facd-fbc6-496e-8fba-b8922777065f.png" 
                        alt="Taiwan Indigenous tribal ritual - Traditional ceremony" 
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img 
                        src="/lovable-uploads/63407aec-5444-4c2e-b631-94f4969e621b.png" 
                        alt="Taiwan Indigenous culture - Mountain landscape" 
                        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-full max-h-full p-0 bg-black/90">
                      <img 
                        src="/lovable-uploads/63407aec-5444-4c2e-b631-94f4969e621b.png" 
                        alt="Taiwan Indigenous culture - Mountain landscape" 
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <img 
                        src="/lovable-uploads/e97748ed-5c9f-401f-8e73-c5e22b575433.png" 
                        alt="Taiwan Indigenous tribal culture - Traditional dance" 
                        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-full max-h-full p-0 bg-black/90">
                      <img 
                        src="/lovable-uploads/e97748ed-5c9f-401f-8e73-c5e22b575433.png" 
                        alt="Taiwan Indigenous tribal culture - Traditional dance" 
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted">
                <p className="text-sm">
                  Documentation of cultural heritage and shamanic rituals as performed by the new generation of Taiwanese aboriginals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Folk Rock Band</h3>
                  <p className="text-accent font-medium">Voices Beyond Silence</p>
                  <p className="text-sm text-muted-foreground">Musical performance and creative collaboration</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground font-mono">2017 - Present</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted">
                <p className="text-sm">
                  Active composer and bassist for the folk rock band "Voices Beyond Silence". 
                  <a 
                    href="https://open.spotify.com/artist/0q5YPsLqNfDOtgTrWqp21F" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline ml-1"
                  >
                    Spotify
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Hospital Soldier</h3>
                  <p className="text-accent font-medium">Swiss Army</p>
                  <p className="text-sm text-muted-foreground">Medical support and emergency response duties</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground font-mono">2014 - 2018</span>
                  <p className="text-sm text-muted-foreground">Moudon</p>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <img 
                  src="/lovable-uploads/8a16f22a-79cb-48ae-92b7-355c6b8070c5.png" 
                  alt="Military service - Hospital soldier training" 
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 p-4 bg-muted">
                <p className="text-sm">
                  Served as a hospital soldier in the Swiss Army, gaining valuable experience in medical support, 
                  emergency response procedures, and working under pressure in structured environments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Additional;
