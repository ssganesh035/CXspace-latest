import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Video, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

export default function Meetups() {

  return (
    <>
      <title>Meetups & Events - CXSpace</title>
      <meta name="description" content="Join CXSpace meetups, workshops, and networking events. Connect with customer success professionals worldwide through virtual and in-person events." />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Meetups & Events</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join our regular meetups, workshops, and networking events happening around the world and online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-neutral-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Badge variant="default" className="mr-3">
                      {event.date}
                    </Badge>
                    <span className="text-sm text-neutral-600">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{event.title}</h3>
                  <p className="text-neutral-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-500">
                      {event.type === 'virtual' ? (
                        <Video className="h-4 w-4 mr-1" />
                      ) : (
                        <MapPin className="h-4 w-4 mr-1" />
                      )}
                      <span>{event.location}</span>
                    </div>
                    <Button variant="link" className="text-primary hover:text-secondary p-0">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
