import Image from 'next/image';
import accountantsImage from '@/assets/accountants.jpg';

const TrustedExperts = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="w-full lg:w-1/2 order-1 lg:order-1 flex justify-center">
          <Image
            src={accountantsImage}
            alt="Accountants at work"
            className="rounded-2xl shadow-lg object-contain w-full max-w-full lg:max-w-md bg-gradient-to-br from-gray-100 to-gray-200 self-start"
          />
        </div>
        <div className="w-full lg:w-1/2 order-2 lg:order-2 flex flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted experts in accountancy services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With decades of experience and a commitment to excellence, our team provides reliable, transparent, and proactive accountancy services. We partner with you to simplify your finances, ensure compliance, and help your business thrive with confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedExperts;
