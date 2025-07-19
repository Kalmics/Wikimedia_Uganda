import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Monthly Edit-a-thon: Ugandan Women Leaders",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Makerere University Library",
      type: "Edit-a-thon",
      capacity: "30 participants",
      description: "Join us for a focused editing session to improve articles about notable Ugandan women leaders.",
      isOnline: false
    },
    {
      title: "Wiki Loves Monuments Planning Meeting",
      date: "January 8, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online (Zoom)",
      type: "Planning Meeting",
      capacity: "Unlimited",
      description: "Planning session for the 2025 Wiki Loves Monuments campaign in Uganda.",
      isOnline: true
    },
    {
      title: "Wikipedia Training for Educators",
      date: "January 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kampala International University",
      type: "Training Workshop",
      capacity: "50 participants",
      description: "Full-day workshop training educators on integrating Wikipedia into their curriculum.",
      isOnline: false
    }
  ];

  const pastEvents = [
    {
      title: "Wiki Loves Monuments Uganda 2024",
      date: "September 1-30, 2024",
      participants: "156 photographers",
      photos: "1,247 photos uploaded",
      description: "Our most successful monuments competition to date, documenting cultural heritage across all regions of Uganda.",
      reportLink: "#"
    },
    {
      title: "Luganda Wikipedia Edit-a-thon",
      date: "August 15, 2024",
      participants: "25 editors",
      articles: "78 articles created/improved",
      description: "Focused session on expanding Luganda Wikipedia content, particularly in health and education topics.",
      reportLink: "#"
    },
    {
      title: "Libraries Mapping Workshop",
      date: "July 10, 2024",
      participants: "32 volunteers",
      locations: "89 libraries mapped",
      description: "Community mapping event documenting libraries across Kampala and surrounding districts.",
      reportLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community Events</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join our regular meetups, edit-a-thons, and training sessions to contribute to free knowledge
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={event.isOnline ? "secondary" : "default"}>
                      {event.isOnline ? "Online" : "In-Person"}
                    </Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {event.capacity}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button className="w-full btn-hero">
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Past Events */}
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Recent Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-muted-foreground">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-medium">{event.participants}</span>
                    </div>
                    {event.photos && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Photos:</span>
                        <span className="font-medium">{event.photos}</span>
                      </div>
                    )}
                    {event.articles && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Content:</span>
                        <span className="font-medium">{event.articles}</span>
                      </div>
                    )}
                    {event.locations && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Mapped:</span>
                        <span className="font-medium">{event.locations}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Calendar CTA */}
          <div className="text-center mt-16">
            <Card className="card-gradient shadow-elegant max-w-2xl mx-auto">
              <CardContent className="section-padding">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  Stay Updated on Events
                </h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our calendar to never miss an edit-a-thon, workshop, or community meetup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">
                    Subscribe to Calendar
                  </Button>
                  <Button variant="outline">
                    Join Mailing List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;