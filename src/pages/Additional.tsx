
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
                  className="w-full h-64 object-cover rounded-lg"
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

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Folk Rock Band Bassist</h3>
                  <p className="text-accent font-medium">Voices Beyond Silence</p>
                  <p className="text-sm text-muted-foreground">Musical performance and creative collaboration</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground font-mono">2017 - Present</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted">
                <p className="text-sm">
                  Active musician and bassist for the folk rock band "Voices Beyond Silence", 
                  demonstrating creativity, teamwork, and commitment to artistic expression alongside scientific pursuits.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Amateur Photographer</h3>
                  <p className="text-accent font-medium">Cultural Documentation</p>
                  <p className="text-sm text-muted-foreground">Documentation of Taiwan's Indigenous tribal culture</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground font-mono">2016 - Present</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted">
                <p className="text-sm">
                  Passionate about cultural preservation through photography, specializing in documenting 
                  Taiwan's Indigenous tribal cultures. This work demonstrates cultural sensitivity, 
                  attention to detail, and commitment to preserving important cultural heritage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Personal Qualities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-accent mb-3">Leadership & Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Military service experience has developed strong leadership skills, 
                    discipline, and the ability to perform effectively under pressure.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-3">Creative Expression</h3>
                  <p className="text-sm text-muted-foreground">
                    Musical background brings creativity and collaborative spirit to professional work, 
                    enhancing problem-solving approaches and team dynamics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-3">Cultural Awareness</h3>
                  <p className="text-sm text-muted-foreground">
                    Photography work demonstrates cultural sensitivity and appreciation for diversity, 
                    valuable assets in international research environments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-3">Work-Life Balance</h3>
                  <p className="text-sm text-muted-foreground">
                    Diverse interests outside of science contribute to a well-rounded perspective 
                    and sustained motivation in professional endeavors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Additional;
