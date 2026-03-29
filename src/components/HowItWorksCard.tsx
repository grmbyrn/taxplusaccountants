interface HowItWorksCard {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    number: string
    heading: string
    text: string
}

export default function HowItWorksCard({icon: Icon, number, heading, text}: HowItWorksCard){
    return (
        <div className="relative transition-all duration-700 ease-out opacity-100 translate-y-0 scale-100">
            <div className="hidden md:block absolute top-10 left-[60%] h-px bg-gradient-to-r from-amber-400 to-transparent transition-all duration-1000 ease-out origin-left w-[80%] opacity-100"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500">
                  <Icon />
                </div>
                <span className="text-5xl font-bold transition-all duration-500 text-amber-200">
                  {number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {heading}
              </h3>
              <p className="text-slate-600">
                {text}
              </p>
            </div>
          </div>
    )
}