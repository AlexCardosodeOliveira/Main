import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Contact Information</h1>
          <p className="text-muted-foreground text-lg">Get in touch for professional opportunities</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl border-b border-border pb-2">Direct Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:cardalex35@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    cardalex35@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+886096209730"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    (+886) 0962 097 301
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Taipei City, Taiwan</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Website</p>
                  <a 
                    href="https://www.cardosodeoliveira.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    www.cardosodeoliveira.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl border-b border-border pb-2">Professional Inquiries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-accent mb-2">Research Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Open to discussing research opportunities in cell biology, 
                  cancer research, and drug discovery.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-accent mb-2">Employment Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Currently seeking positions in pharmaceutical research, 
                  biotechnology, and academic institutions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-accent mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Available for consulting on organoid models, 
                  cell culture techniques, and research methodology.
                </p>
              </div>

              <Button 
                className="w-full mt-6"
                onClick={() => window.location.href = 'mailto:cardalex35@gmail.com?subject=Professional Inquiry'}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl border-b border-border pb-2">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-accent mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-accent mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">Same day (Taiwan time)</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-accent mb-2">Languages</h3>
                  <p className="text-sm text-muted-foreground">IT, EN, DE, FR, PT, ZH</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;