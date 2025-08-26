
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Education = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Education</h1>
          </header>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">National Taiwan Normal University</h3>
                    <p className="text-accent font-medium">Scholarship</p>
                    <p className="text-sm text-muted-foreground">Advanced Mandarin Courses</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground font-mono">2023</span>
                    <p className="text-sm text-muted-foreground">Taipei, Taiwan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">ETH Zurich</h3>
                    <p className="text-accent font-medium">Master of Science ETH in Biology</p>
                    <p className="text-sm text-muted-foreground">Specialization in Cell Biology</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">Approfondimento in biologia cellulare</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground font-mono">2019 - 2022</span>
                    <p className="text-sm text-muted-foreground">Zurich, Switzerland</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Universität Bern</h3>
                    <p className="text-accent font-medium">Bachelor of Science in Biology</p>
                    <p className="text-sm text-muted-foreground">Special qualification in Cell Biology</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">Cum laude honors</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground font-mono">2015 - 2019</span>
                    <p className="text-sm text-muted-foreground">Bern, Switzerland</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl border-b border-border pb-2">Academic Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Cell Biology</h3>
                    <p className="text-sm text-muted-foreground">Advanced study of cellular mechanisms and dynamics</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Cancer Research</h3>
                    <p className="text-sm text-muted-foreground">Specialized research in oncology and tumor biology</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Organoid Models</h3>
                    <p className="text-sm text-muted-foreground">Expertise in 3D tissue modeling and analysis</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Immunology</h3>
                    <p className="text-sm text-muted-foreground">Understanding of immune system mechanisms</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Microbiology</h3>
                    <p className="text-sm text-muted-foreground">Study of microorganisms and their interactions</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">Systems Biology</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive biological system analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
