import SectionContainer from '@/components/SectionContainer';

export default function FinancialConsultingPage() {
  return (
    <div className="bg-primary-100 min-h-screen pb-0">
      <SectionContainer>
        <section className="pt-16 pb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Financial Consulting</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Strategic financial advice to help your business grow and achieve its goals. Get expert guidance for every stage of your journey.
          </p>
        </section>
      </SectionContainer>
      <SectionContainer>
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the service</h2>
          <p className="text-gray-700 mb-4">Our financial consulting service provides tailored strategies and insights to help you make informed decisions, optimize resources, and drive sustainable growth.</p>
        </section>
      </SectionContainer>
    </div>
  );
}
