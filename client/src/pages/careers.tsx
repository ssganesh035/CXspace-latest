import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, UserCheck, Award } from "lucide-react";
import { jobs } from "@/data/jobs";

export default function Careers() {

  return (
    <>
      <title>Career Opportunities - CXSpace</title>
      <meta name="description" content="Discover job opportunities in customer success, technical support, and B2B SaaS. Access career resources, mentorship programs, and certifications through CXSpace." />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Career Opportunities</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover job opportunities, career resources, and professional development programs within our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Career Resources</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Briefcase className="text-primary h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Job Board</h4>
                    <p className="text-neutral-600">Access exclusive job postings from our partner companies and community members.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserCheck className="text-primary h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Mentorship Program</h4>
                    <p className="text-neutral-600">Connect with experienced professionals for career guidance and skill development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-primary h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Certification Programs</h4>
                    <p className="text-neutral-600">Earn industry-recognized certifications to advance your career.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="B2B SaaS professionals networking"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Featured Job Opportunities</h3>
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2">{job.title}</h4>
                        <p className="text-neutral-600 mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="default">{job.type}</Badge>
                          <Badge variant="secondary">{job.location}</Badge>
                          {job.salary && <Badge variant="outline">{job.salary}</Badge>}
                        </div>
                        <p className="text-neutral-600 text-sm">{job.posted}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button>
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">
                View All Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
