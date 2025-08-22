import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Certifications = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Certifications & Professional Development</h1>
          <p className="text-muted-foreground text-lg">Continuous learning and skill enhancement</p>
        </header>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Academic Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Academic Scholarship</h3>
                  <span className="text-sm text-muted-foreground font-mono">2023</span>
                </div>
                <p className="text-accent font-medium mb-2">National Taiwan Normal University</p>
                <p className="text-sm text-muted-foreground">Awarded scholarship for Advanced Mandarin language courses, demonstrating commitment to international collaboration and cultural understanding.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Research Competencies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-accent mb-3">Laboratory Techniques</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Cell culture and organoid development</li>
                    <li>• Molecular biology techniques</li>
                    <li>• Microscopy and imaging</li>
                    <li>• Data analysis and interpretation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-3">Research Skills</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Independent project management</li>
                    <li>• Literature review and analysis</li>
                    <li>• Scientific writing and presentation</li>
                    <li>• Cross-cultural collaboration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Language Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Professional Proficiency</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-accent">Proficient</span>
                    </div>
                    <div className="flex justify-between">
                      <span>German</span>
                      <span className="text-accent">Proficient</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French</span>
                      <span className="text-accent">Proficient</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Portuguese</span>
                      <span className="text-accent">Proficient</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Advanced & Native</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Italian</span>
                      <span className="text-accent">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chinese (Mandarin)</span>
                      <span className="text-accent">Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Professional Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-2">International Research Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Extensive experience working in multicultural research environments across Switzerland and Taiwan, 
                    developing strong cross-cultural communication and collaboration skills.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Commitment to staying current with latest developments in cell biology, cancer research, 
                    and drug discovery through ongoing professional development and research activities.
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

export default Certifications;