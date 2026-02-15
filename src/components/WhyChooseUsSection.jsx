import Image from "next/image";
import { Users2, CheckCircle2, CalendarDays } from "lucide-react";
import accountantsImage from "@/assets/accountants.jpg";

const WhyChooseUsSection = () => (
  <section>
    <div className="container mx-auto mt-16 sm:mt-20 lg:mt-28">
      <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-6 text-center">
        We're the best option for your finances
      </h2>
      <div className="relative flex flex-col xl:flex-row items-start xl:items-center mb-20">
        {/* Image */}
        <div className="w-full xl:w-[600px] xl:ml-auto xl:relative z-0">
          <Image
            src={accountantsImage}
            alt="Accountants team"
            width={600}
            height={300}
            className="rounded-2xl object-cover w-full h-auto"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Cards */}
        <div
          className="flex flex-col gap-8 mx-auto w-full max-w-md
            mt-[-4rem] relative z-10 items-start text-left
            xl:flex-row xl:max-w-none xl:w-auto xl:gap-8 xl:mt-0 xl:items-center
            xl:absolute xl:left-0 xl:top-2/3 xl:-translate-y-1/2"
        >
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full xl:w-80">
            <Users2 className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Dedicated accounting team
            </h3>
            <p className="text-muted-foreground">
              Excepteur sint occaecat cupidatat non proiden offici.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full xl:w-80">
            <CheckCircle2 className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Filing and compliance
            </h3>
            <p className="text-muted-foreground">
              Excepteur sint occaecat cupidatat non proiden offici.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full xl:w-80">
            <CalendarDays className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Unlimited bookkeeping
            </h3>
            <p className="text-muted-foreground">
              Excepteur sint occaecat cupidatat non proiden offici.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
