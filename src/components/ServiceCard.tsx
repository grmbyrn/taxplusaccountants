import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  name: string;
  href: string;
  img: { src: string };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, href, img }) => (
  <Link href={href} className="group flex flex-col w-full">
    {/* Image frame */}
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md mb-3">
  <Image
    src={img.src}
    alt={name}
    width={400}
    height={533}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, 400px"
    priority={false}
  />
</div>

    {/* Label row */}
    <div className="flex items-center w-full">
      <span className="text-xl md:text-2xl font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors flex-1">
        {name}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-primary-500 ml-2 group-hover:text-primary-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
      >
        <path d="M6 18L18 6" />
        <path d="M7 6h11v11" />
      </svg>
    </div>
  </Link>
);

export default ServiceCard;