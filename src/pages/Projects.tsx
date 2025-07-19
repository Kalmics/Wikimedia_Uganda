import { MapPin, Camera, Users, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Ugandan Libraries Geo Quest",
      description: "Mapping and documenting libraries across Uganda to improve access to information and educational resources.",
      status: "ongoing",
      icon: MapPin,
      goals: ["Map 500+ libraries nationwide", "Create detailed Wikipedia articles", "Improve geographic coverage"],
      partners: ["Uganda Library Association", "Makerere University"],
      link: "https://meta.wikimedia.org/wiki/Uganda_Libraries"
    },
    {
      title: "Museums Mapping Initiative",
      description: "Comprehensive documentation of Uganda's museums and cultural heritage sites for global accessibility.",
      status: "ongoing",
      icon: Camera,
      goals: ["Document 100+ museums", "Upload 1000+ images to Commons", "Create multilingual content"],
      partners: ["Uganda Museums", "Cultural Heritage Institute"],
      link: "https://commons.wikimedia.org/wiki/Category:Museums_in_Uganda"
    },
    {
      title: "Wiki Loves Monuments Uganda",
      description: "Annual photography competition documenting Uganda's architectural and cultural monuments.",
      status: "annual",
      icon: Camera,
      goals: ["1000+ monument photos", "Engage 200+ photographers", "Preserve cultural heritage"],
      partners: ["Tourism Board", "Local photographers"],
      link: "https://commons.wikimedia.org/wiki/Wiki_Loves_Monuments_Uganda"
    },
    {
      title: "Women in Red Uganda",
      description: "Initiative to increase content about notable Ugandan women and reduce gender bias on Wikipedia.",
      status: "ongoing",
      icon: Users,
      goals: ["Create 500+ biographies", "Train 100+ women editors", "Improve gender representation"],
      partners: ["UN Women Uganda", "Gender advocacy groups"],
      link: "https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Women_in_Red/Uganda"
    },
    {
      title: "Educational Outreach Program",
      description: "Training students and educators on Wikipedia editing and digital literacy skills.",
      status: "ongoing",
      icon: BookOpen,
      goals: ["Reach 50+ schools", "Train 1000+ students", "Integrate Wiki-education in curriculum"],
      partners: ["Ministry of Education", "Universities"],
      link: "https://outreach.wikimedia.org/wiki/Education"
    },
    {
      title: "Luganda Wikipedia Expansion",
      description: "Growing content in Luganda language to make knowledge accessible to local communities.",
      status: "ongoing",
      icon: BookOpen,
      goals: ["5000+ new articles", "Translate key topics", "Build editor community"],
      partners: ["Language scholars", "Cultural organizations"],
      link: "https://lg.wikipedia.org"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-primary text-primary-foreground';
      case 'annual':
        return 'bg-accent text-accent-foreground';
      case 'completed':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects & Initiatives</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Collaborative efforts to expand free knowledge and preserve Uganda's cultural heritage
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <project.icon className="h-6 w-6 text-primary" />
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Goals:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Partners:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.partners.map((partner, partnerIndex) => (
                        <Badge key={partnerIndex} variant="outline" className="text-xs">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="card-gradient shadow-elegant max-w-2xl mx-auto">
              <CardContent className="section-padding">
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  Want to Start a New Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have an idea for a new initiative? We're always looking for passionate 
                  volunteers to lead innovative projects that advance free knowledge in Uganda.
                </p>
                <Button className="btn-hero">
                  Propose a Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;