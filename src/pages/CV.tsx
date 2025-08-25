
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const CV = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Curriculum Vitae</h1>
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
                  <span className="text-sm text-muted-foreground font-mono">2024 - Present</span>
                </div>
                <p className="text-accent font-medium mb-2">Bionet Therapeutics Corp.</p>
                <p className="text-sm text-muted-foreground mb-3">Product Development R&D, Taipei, Taiwan</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Experiment design and oversight for novel therapeutic development</li>
                  <li>Product-market fit analysis and strategic development planning</li>
                  <li>Advanced exosome product laboratory studies spanning cosmetics and pharmaceutical applications</li>
                  <li>Cross-functional leadership in translational research initiatives</li>
                  <li>Led independent research projects combining wet lab expertise with comprehensive literature analysis</li>
                  <li>Drove innovation in novel therapeutic development and functional testing protocols</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Research Scientist</h3>
                  <span className="text-sm text-muted-foreground font-mono">2023 - 2024</span>
                </div>
                <p className="text-accent font-medium mb-2">Academia Sinica</p>
                <p className="text-sm text-muted-foreground mb-3">
                  <a href="https://celldynamicslab.mystrikingly.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cell Dynamics / Systems Biology</a> (Dr. Sheng-hong Chen), Taipei, Taiwan
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Assistant Researcher</h3>
                  <span className="text-sm text-muted-foreground font-mono">2021 - 2022</span>
                </div>
                <p className="text-accent font-medium mb-2">ETH Zurich</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Cancer / Stem Cell Dynamics (<a href="https://mhs.biol.ethz.ch/research/gehart.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Dr. Helmuth Gehart</a>), Zurich, Switzerland
                </p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><em>In vitro</em> reporter systems development</li>
                  <li>Targeted tumorigenesis and genotyping of colon organoids</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Salesperson / Shopkeeper</h3>
                  <span className="text-sm text-muted-foreground font-mono">2020 - 2021</span>
                </div>
                <p className="text-accent font-medium mb-2">ETH Store</p>
                <p className="text-sm text-muted-foreground mb-3">Student job concurrent with studies, Hönggerberg campus, Zurich, Switzerland</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Customer support and order assistance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CV;
