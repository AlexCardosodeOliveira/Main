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
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground font-mono">2019 - 2022</span>
                    <p className="text-sm text-muted-foreground">Zurich, Switzerland</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <img 
                      src="/lovable-uploads/edd7f7a0-b16d-483f-ae7c-ac4cfdbabcc6.png" 
                      alt="ETH Zurich Master Thesis - Generation of in vitro Reporter Systems and Colon Cancer Organoid Models" 
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/fcf31360-52fe-4079-9d0f-bb1d990993cd.png" 
                      alt="ETH Zurich Master of Science Diploma in Biology" 
                      className="w-full h-auto rounded-lg border"
                    />
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
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground font-mono">2015 - 2019</span>
                    <p className="text-sm text-muted-foreground">Bern, Switzerland</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <img 
                      src="/lovable-uploads/9c94197d-0b00-42d9-b383-dfd21c232dd4.png" 
                      alt="University of Bern Bachelor Thesis - Investigating the involvement of the CCR6/CCL20-axis in the migration of CD4+ effector/memory T cells" 
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/ac728e63-e24a-492c-830b-5cf60c33c29e.png" 
                      alt="Published research paper - The choroid plexus acts as an immune cell reservoir and brain entry site in experimental autoimmune encephalomyelitis" 
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/9210b18f-64e0-4490-8a64-f0b2cca65e6f.png" 
                      alt="University of Bern Bachelor of Science Diploma in Biology with special qualification in Cell Biology" 
                      className="w-full h-auto rounded-lg border"
                    />
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
                <p className="text-sm text-muted-foreground mb-6">
                  The specialization for both the Bachelor's and Master's degrees was in cell biology. Other focus areas included cancer biology, stem cell dynamics, organoid models, and immunology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
