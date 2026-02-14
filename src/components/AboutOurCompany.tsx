import Image from "next/image"
import accountantsImage from '@/assets/accountants.jpg'; // Adjust path if needed

const AboutOurCompany = () => (
    <div>
        <div className="flex flex-col md:flex-row md:items-center mb-12">
          <div className="border-l-4 border-primary pl-6 md:pr-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-0">
             About our company
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 md:mt-0">
            Our commitment to excellence, integrity, and client satisfaction has made 
            us the go-to accounting firm for businesses who value precision, reliability, 
            and strategic financial insight.
          </p>
        </div>
        {/* Accountant image */}
        <Image
          src={accountantsImage}
          alt="Our accounting team"
          width={600}
          height={300}
          className="rounded-2xl w-full object-cover mb-8"
          priority
        />
        {/* Story section */}
        <div className="mt-8">
          <h2 className="text-4xl lg:text-3xl font-bold text-foreground mb-4">
            The story behind how our company was founded
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2009, TaxPlus Accountants has been the trusted financial partner for hundreds of businesses across the region. Our team of certified public accountants and financial experts brings decades of combined experience to help you navigate complex financial challenges.
          </p>
        </div>
        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 flex flex-col items-left">
            <span className="text-3xl font-bold text-primary mb-2">10k</span>
            <span className="text-lg font-semibold text-foreground">Happy Clients</span>
          </div>
          <div className="p-6 flex flex-col items-left">
            <span className="text-3xl font-bold text-primary mb-2">50+</span>
            <span className="text-lg font-semibold text-foreground">Team Members</span>
          </div>
          <div className="p-6 flex flex-col items-left">
            <span className="text-3xl font-bold text-primary mb-2">97%</span>
            <span className="text-lg font-semibold text-foreground">Customer Satisfaction</span>
          </div>
          <div className="p-6 flex flex-col items-left">
            <span className="text-3xl font-bold text-primary mb-2">15</span>
            <span className="text-lg font-semibold text-foreground">Years of Experience</span>
          </div>
        </div>
      </div>
)

export default AboutOurCompany;