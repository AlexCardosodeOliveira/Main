import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const CV = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Curriculum Vitae</h1>
          <p className="text-muted-foreground text-lg">Complete professional background and achievements</p>
        </header>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Senior Research Specialist</h3>
                  <span className="text-sm text-muted-foreground font-mono">2024 - 2025</span>
                </div>
                <p className="text-accent font-medium mb-2">Bionet Therapeutics Corp.</p>
                <p className="text-sm text-muted-foreground mb-3">R&D, New drug discovery</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Carried out various independent research projects (wet lab and literature search)</li>
                  <li>Contributed to new products' development and functional testing</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Research Scientist</h3>
                  <span className="text-sm text-muted-foreground font-mono">2023 - 2024</span>
                </div>
                <p className="text-accent font-medium mb-2">Academia Sinica</p>
                <p className="text-sm text-muted-foreground mb-3">Cell Dynamics / Systems Biology (Dr. Sheng-hong Chen), Taipei, Taiwan</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Assistant Researcher</h3>
                  <span className="text-sm text-muted-foreground font-mono">2021 - 2022</span>
                </div>
                <p className="text-accent font-medium mb-2">ETH Zurich</p>
                <p className="text-sm text-muted-foreground mb-3">Cancer / Stem Cell Dynamics (Prof. Dr. Helmuth Gehart), Zurich, Switzerland</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>In vitro reporter systems development</li>
                  <li>Targeted tumorigenesis and genotyping of colon organoids</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Salesperson / Shopkeeper</h3>
                  <span className="text-sm text-muted-foreground font-mono">2020 - 2021</span>
                </div>
                <p className="text-accent font-medium mb-2">ETH Store</p>
                <p className="text-sm text-muted-foreground mb-3">Customer Service and Warehousing, Zurich, Switzerland</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Customer support and order assistance</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Research & Development</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Research and Development</li>
                    <li>• Raw data analysis</li>
                    <li>• Literature survey</li>
                    <li>• Problem solving</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Scientific Expertise</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Cell/Cancer biology</li>
                    <li>• Novel therapeutics</li>
                    <li>• Data presentation</li>
                    <li>• Communication</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-sm">
                  <span className="font-medium">English:</span> Proficient
                </div>
                <div className="text-sm">
                  <span className="font-medium">German:</span> Proficient
                </div>
                <div className="text-sm">
                  <span className="font-medium">French:</span> Proficient
                </div>
                <div className="text-sm">
                  <span className="font-medium">Portuguese:</span> Proficient
                </div>
                <div className="text-sm">
                  <span className="font-medium">Italian:</span> Native
                </div>
                <div className="text-sm">
                  <span className="font-medium">Chinese:</span> Advanced
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CV;