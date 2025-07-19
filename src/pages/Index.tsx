import { ArrowRight, Users, Edit, Calendar, TrendingUp, Globe, BookOpen, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-uganda-knowledge.jpg';

const Index = () => {
  const stats = [
    { label: "Active Members", value: "100+", icon: Users },
    { label: "Articles Created", value: "10,000+", icon: Edit },
    { label: "Events Held", value: "50+", icon: Calendar },
    { label: "Photos Uploaded", value: "5,000+", icon: Camera }
  ];

  const latestUpdates = [
    {
      title: "Wiki Loves Monuments 2024 Results",
      date: "December 1, 2024",
      excerpt: "Over 1,200 photos of Ugandan monuments were submitted, making this our most successful campaign yet.",
      category: "Event"
    },
    {
      title: "New Luganda Wikipedia Milestone",
      date: "November 28, 2024", 
      excerpt: "Luganda Wikipedia reaches 5,000 articles thanks to our dedicated community of contributors.",
      category: "Achievement"
    },
    {
      title: "December Edit-a-thon: Women Leaders",
      date: "November 25, 2024",
      excerpt: "Join us December 15th to improve articles about notable Ugandan women leaders and changemakers.",
      category: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-16 w-16 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Wikimedia Community<br />
                <span className="text-gradient">User Group Uganda</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
                Expanding Free Knowledge Across Uganda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero" asChild>
                  <Link to="/get-involved">
                    Join Our Community
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <Link to="/events">
                    Upcoming Events
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a passionate community of volunteers dedicated to promoting free knowledge 
            and supporting Wikimedia projects in Uganda. As an officially recognized Wikimedia 
            Community User Group, we work to expand access to information and empower local 
            contributors to share their knowledge with the world.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gradient">Latest Updates</h2>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Posts
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{update.category}</Badge>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                  <CardTitle className="text-xl">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {update.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="card-gradient shadow-elegant">
            <CardContent className="section-padding">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-gradient">
                Ready to Contribute?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a student, educator, photographer, or simply passionate about 
                sharing knowledge, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero" asChild>
                  <Link to="/get-involved">
                    Start Contributing
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
