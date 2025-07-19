import { UserPlus, Edit, Heart, MessageCircle, Github, BookOpen, Camera, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GetInvolved = () => {
  const waysTooHelp = [
    {
      icon: Edit,
      title: "Become a Wikipedia Editor",
      description: "Start contributing to Wikipedia by editing articles, adding references, and improving content about Uganda and East Africa.",
      difficulty: "Beginner Friendly",
      timeCommitment: "1-2 hours/week",
      action: "Start Editing"
    },
    {
      icon: Camera,
      title: "Contribute Photos to Commons",
      description: "Upload photos of Ugandan landmarks, culture, and daily life to Wikimedia Commons for use in articles worldwide.",
      difficulty: "Easy",
      timeCommitment: "Flexible",
      action: "Upload Photos"
    },
    {
      icon: Users,
      title: "Join Community Events",
      description: "Attend our regular edit-a-thons, workshops, and meetups to learn from experienced editors and meet fellow contributors.",
      difficulty: "All Levels",
      timeCommitment: "Monthly events",
      action: "Find Events"
    },
    {
      icon: BookOpen,
      title: "Lead a Project",
      description: "Propose and lead initiatives that align with our mission of expanding free knowledge in Uganda.",
      difficulty: "Advanced",
      timeCommitment: "5+ hours/week",
      action: "Propose Project"
    },
    {
      icon: MessageCircle,
      title: "Community Outreach",
      description: "Help us reach new contributors by organizing talks at schools, universities, and community organizations.",
      difficulty: "Intermediate",
      timeCommitment: "2-3 hours/week",
      action: "Get Started"
    },
    {
      icon: Heart,
      title: "Support Our Mission",
      description: "Spread awareness about our work, share our content on social media, and help us build a stronger community.",
      difficulty: "Easy",
      timeCommitment: "Flexible",
      action: "Share & Support"
    }
  ];

  const communities = [
    {
      name: "English Wikipedia",
      description: "Join the global community editing English Wikipedia articles",
      link: "https://en.wikipedia.org",
      language: "English"
    },
    {
      name: "Luganda Wikipedia",
      description: "Help grow Wikipedia in Luganda language",
      link: "https://lg.wikipedia.org",
      language: "Luganda"
    },
    {
      name: "Swahili Wikipedia",
      description: "Contribute to the East African Swahili Wikipedia community",
      link: "https://sw.wikipedia.org",
      language: "Swahili"
    },
    {
      name: "Wikimedia Commons",
      description: "Upload and organize free media files",
      link: "https://commons.wikimedia.org",
      language: "All Languages"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
      case 'Beginner Friendly':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join our community and help expand free knowledge across Uganda and beyond
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            How You Can Contribute
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {waysTooHelp.map((way, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <way.icon className="h-6 w-6 text-primary" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(way.difficulty)}`}>
                      {way.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {way.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-muted-foreground">Time Commitment:</span>
                      <span className="font-medium">{way.timeCommitment}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-hero">
                    {way.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Links */}
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Local Language Communities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {communities.map((community, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{community.name}</h3>
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {community.language}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {community.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={community.link} target="_blank" rel="noopener noreferrer">
                      Join Community
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact & Join */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <UserPlus className="h-6 w-6 text-primary" />
                  <span>Join Our Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Ready to start contributing? Join our mailing list and community groups 
                  to stay connected with fellow Wikimedia enthusiasts in Uganda.
                </p>
                <div className="space-y-3">
                  <Button className="w-full btn-hero">
                    Join Mailing List
                  </Button>
                  <Button variant="outline" className="w-full">
                    WhatsApp Group
                  </Button>
                  <Button variant="outline" className="w-full">
                    Telegram Channel
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Github className="h-6 w-6 text-primary" />
                  <span>Volunteer Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Looking for more structured involvement? We have various volunteer 
                  positions available for committed community members.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm">
                    <span className="font-medium">• Event Coordinators</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">• Training Facilitators</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">• Content Strategy Leads</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">• Community Outreach</span>
                  </div>
                </div>
                <Button className="w-full btn-accent">
                  Apply to Volunteer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;