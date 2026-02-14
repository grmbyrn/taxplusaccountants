import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceProps {
  image: string | StaticImageData;
  alt: string;
  link: string;
  service: string;
}

const Service = ({ image, alt, link, service }: ServiceProps) => {
  return (
    <a href={`/services/${link}`} className="flex flex-col group w-full">
      <Image
        src={image}
        alt={alt}
        width={384}
        height={180}
        className="rounded-2xl mb-4 w-full"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex items-center justify-between w-full">
        <span className="text-lg font-semibold text-white group-hover:underline">{service}</span>
        <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
      </div>
    </a>
  );
};

export default Service;