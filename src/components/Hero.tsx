import Button from './Button';

const Hero = () => (
  <section className="py-8 lg:py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div
        className="relative min-h-[60vh] flex items-center justify-start bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1768849940833-88a1be7a6b44?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-indigo-900/40 z-0 rounded-2xl" />
        <div className="relative z-10 flex flex-col items-start justify-center min-h-[60vh] px-8 py-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Expert accounting for better businesses
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4">
              <Button href="/contact" className="px-8 py-3.5 bg-primary-500 text-white">
                Contact us
              </Button>
              <Button href="/services" className="px-8 py-3.5 bg-white text-neutral-800 border border-neutral-300">
                Browse all services
              </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
