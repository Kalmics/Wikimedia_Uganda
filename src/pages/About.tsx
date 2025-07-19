import { Users, Target, History, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Community</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Dedicated to expanding free knowledge and supporting Wikimedia projects across Uganda and East Africa
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="card-gradient shadow-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To promote free knowledge and digital literacy across Uganda by supporting 
                  Wikimedia projects, organizing community events, and empowering local contributors 
                  to share their knowledge with the world.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A Uganda where every person has access to free knowledge in their own language, 
                  and where local communities actively contribute to the world's largest 
                  collaborative knowledge projects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* History & Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Our History & Milestones</h2>
            <Card className="card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <History className="h-6 w-6 text-primary" />
                  <span>Key Milestones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-lg">2018 - Community Formation</h3>
                    <p className="text-muted-foreground">Established as an official Wikimedia Community User Group with initial 15 active members.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-semibold text-lg">2019 - First Major Event</h3>
                    <p className="text-muted-foreground">Organized Wiki Loves Monuments Uganda, documenting over 200 cultural heritage sites.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-lg">2020-2021 - Digital Expansion</h3>
                    <p className="text-muted-foreground">Adapted to virtual events during pandemic, reaching 500+ participants across East Africa.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-semibold text-lg">2022-Present - Growth & Impact</h3>
                    <p className="text-muted-foreground">Expanded to 100+ active members, conducted 50+ edit-a-thons, and added 10,000+ articles.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Wikimedia Affiliation */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-gradient">Wikimedia Foundation Affiliation</h2>
            <Card className="card-gradient shadow-elegant max-w-4xl mx-auto">
              <CardContent className="section-padding">
                <div className="flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are proud to be officially recognized as a Wikimedia Community User Group, 
                  working in partnership with the Wikimedia Foundation to advance the mission of 
                  free knowledge for all.
                </p>
                <p className="text-muted-foreground">
                  Our group follows the Wikimedia movement's core principles of neutrality, 
                  verifiability, and collaborative editing while focusing on content and 
                  contributors relevant to Uganda and the broader East African region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;