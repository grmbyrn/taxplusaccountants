import SectionContainer from '@/components/SectionContainer';

export default function AuditServicesPage() {
  return (
    <div className="bg-primary-100 min-h-screen pb-0">
      <SectionContainer>
        <section className="pt-16 pb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Audit Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive audit services to ensure accuracy and compliance with regulations. We help you stay confident in your financial reporting.
          </p>
        </section>
      </SectionContainer>
      <SectionContainer>
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the service</h2>
          <p className="text-gray-700 mb-4">Our audit services provide a thorough review of your financial records, helping you meet regulatory requirements and improve business transparency.</p>
        </section>
      </SectionContainer>
    </div>
  );
}
