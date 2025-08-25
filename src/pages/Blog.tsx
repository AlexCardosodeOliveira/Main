import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Blog = () => {
  // Placeholder blog posts - will be replaced with Supabase data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Exosome Therapeutics in Precision Medicine",
      excerpt: "Exploring how exosome-based drug delivery systems are revolutionizing targeted therapeutics and opening new avenues for personalized treatment approaches.",
      date: "2025-01-15",
      tags: ["Exosomes", "Precision Medicine", "Drug Delivery"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Translational Research: Bridging Laboratory Innovation to Clinical Impact",
      excerpt: "Insights into effective strategies for translating breakthrough research discoveries into meaningful clinical applications and market-ready therapeutics.",
      date: "2025-01-10",
      tags: ["Translational Research", "Clinical Development", "Innovation"],
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Advanced Organoid Models in Cancer Research: Current Capabilities and Future Directions",
      excerpt: "A comprehensive overview of how organoid technology is transforming our understanding of cancer biology and accelerating therapeutic development.",
      date: "2025-01-05",
      tags: ["Organoids", "Cancer Research", "Modeling"],
      readTime: "6 min read"
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Research Insights</h1>
          <p className="text-muted-foreground text-lg">
            Perspectives on advancing therapeutic innovation and translational medicine
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">
                    {post.readTime}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-dashed border-muted-foreground/20 text-center">
          <h3 className="text-lg font-semibold mb-2">Interactive Blog Coming Soon</h3>
          <p className="text-muted-foreground">
            Full blog functionality with content management will be available once connected to Supabase.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;