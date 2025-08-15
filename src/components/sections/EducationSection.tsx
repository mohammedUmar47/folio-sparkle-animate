import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Machine Learning. Completed thesis on distributed systems optimization.",
      achievements: ["Dean's List", "Research Assistant", "Teaching Assistant"]
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of California, Berkeley",
      period: "2014 - 2018",
      gpa: "3.7/4.0",
      description: "Comprehensive study of software development, algorithms, and data structures with focus on web technologies.",
      achievements: ["Magna Cum Laude", "CS Honor Society", "Hackathon Winner"]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Meta React Developer Certificate",
    "Microsoft Azure Fundamentals"
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div>GPA: {edu.gpa}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="glass-effect border-border/50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Professional Certifications
              </h3>
              <p className="text-muted-foreground">
                Industry-recognized credentials and continuous learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-secondary/50 rounded-lg text-center hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;