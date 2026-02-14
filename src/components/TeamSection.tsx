const TeamSection = () => (
    <div className="mt-20 pt-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified professionals bring years of experience and dedication 
            to every client relationship.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson, CPA",
              role: "Senior Partner & Tax Specialist",
              experience: "12+ years of tax and accounting expertise"
            },
            {
              name: "Michael Chen, CPA",
              role: "Financial Planning Director",
              experience: "10+ years in business advisory services"
            },
            {
              name: "Emily Rodriguez, CPA",
              role: "Bookkeeping & Compliance Manager",
              experience: "8+ years in financial record management"
            }
          ].map((member, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-soft">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </div>
          ))}
        </div>
    </div>
)

export default TeamSection;