import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { src: "/images/pngwing.com (12).png", alt: "Social Icon 1", href: "/" },
    { src: "/images/pngwing.com (13).png", alt: "Social Icon 2", href: "/" },
    { src: "/images/whatsapp-64.png", alt: "WhatsApp Icon", href: "/" },
    { src: "/images/pngwing.com (15).png", alt: "Social Icon 3", href: "/" },
  ];

  return (
    <div className="w-auto flex items-center gap-6 md:gap-8 pt-4 pb-6 md:py-10 ">
      {socialLinks.map((icon, index) => (
        <Link key={index} className="cursor-pointer" href={icon.href}>
          <Image
            priority
            src={icon.src}
            alt={icon.alt}
            width={60}
            height={60}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
