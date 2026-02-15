import Link from "next/link";
import Image from "next/image";

import type { StaticImageData } from "next/image";

interface ResourcesCardProps {
  heading: string;
  paragraph: string;
  href: string;
  img: string | StaticImageData;
}

const ResourcesCard = ({
  heading,
  paragraph,
  href,
  img,
}: ResourcesCardProps) => (
  <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
    <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4">
      <Image src={img} alt={heading} width={60} height={60} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{heading}</h3>
    <p className="text-slate-600">{paragraph}</p>
    <Link
      href={href}
      target="_blank"
      className="mt-4 block text-amber-500 hover:underline"
    >
      Learn more
    </Link>
  </div>
);

export default ResourcesCard;
