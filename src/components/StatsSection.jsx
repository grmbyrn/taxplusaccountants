import { Button } from './ui/button';

const StatsSection = () => (
  <section className="bg-gray-900 rounded-2xl mt-16 sm:mt-20 lg:mt-28 ">
    <div className="container mx-auto px-4">
      <div className="relative max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 text-left shadow-lg overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">We have impactful numbers</h2>
          <p className="text-lg text-gray-300 mb-8">
            Sed convallis tincidunt nunc magna tincidun dolorsuscipit mattis massa nisl et adipiscing semper.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-blue-dark text-white text-lg px-8 py-6 rounded-2xl mb-12"
          >
            Contact Us
          </Button>
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-4xl font-bold text-white">10k</span>
              <span className="block text-gray-300 text-lg mt-2">Happy Clients</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white">50+</span>
              <span className="block text-gray-300 text-lg mt-2">Team Members</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white">97%</span>
              <span className="block text-gray-300 text-lg mt-2">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
