import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaViber } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface FooterColumnData {
  title: string;
  links: string[];
}

const footerColumns: FooterColumnData[] = [
  {
    title: 'Explore',
    links: ['Destinations', 'Trek Routes', 'National Parks', 'Glacier Lakes', 'Hidden Gems'],
  },
  {
    title: 'Travel Guide',
    links: ['Travel Safety', 'Permits & Regulations', 'Weather & Seasons', 'Packing Guide', 'Transportation'],
  },
  {
    title: 'Regions',
    links: ['Himalayas', 'Hilly Region', 'Terai', 'UNESCO Heritage Sites', 'Wildlife & Nature'],
  },
  {
    title: 'Company',
    links: ['About JackYak', 'Contact', 'Privacy Policy', 'Terms & Conditions', 'FAQs'],
  },
];

const FooterColumn: React.FC<FooterColumnData> = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:pointer-events-none md:mb-4"
      >
        <span className="font-manrope font-bold text-white text-base">{title}</span>
        <ChevronDown
          size={18}
          className={`text-white transition-transform duration-200 md:hidden ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <ul
        className={`
          flex flex-col gap-2 overflow-hidden
          transition-[max-height,opacity] duration-300 ease-in-out
          ${open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}
          md:max-h-none md:opacity-100 md:pb-0
        `}
      >
        {links.map((link) => (
          <li key={link}>

             <a href="#"
              className="font-manrope font-medium text-white/80 hover:text-white text-sm md:text-base transition-colors leading-[2.5] md:leading-[2.56]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SocialIconProps {
  label: string;
  Icon: IconType;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ label, Icon, href = '#' }) => {
  return (

    < a href={href}
      aria-label={label}
      className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors"
    >
      <Icon size={20} />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0E1B2B] text-white">
         <div className="w-full overflow-hidden -mb-1">
        <img
          src="/footer.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover select-none pointer-events-none"
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 ">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[300px]">
            <img src="/jack-yak-logo.png" alt="JackYak" className="w-20 h-auto" />
            <p className="font-manrope font-normal text-white text-sm md:text-base leading-[1.05]">
              Helping travelers explore Nepal with trusted information.
            </p>
          </div>

          {/* Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-x-8">
            {footerColumns.map((col) => (
              <FooterColumn key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        {/* Bottom bar */}
<div className="max-w-full mt-12 md:mt-16 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
  {/* empty spacer to balance the icons column on desktop, keeps text truly centered */}
  <div className="hidden md:block" />

  <p className="font-manrope font-medium text-white/54 text-sm md:text-base text-center order-2 md:order-none">
    © 2026 JackYak. All rights reserved.
  </p>

  <div className="flex items-center justify-center md:justify-end flex-row gap-4 order-1 md:order-none">
    <SocialIcon label="Instagram" Icon={FaInstagram} />
    <SocialIcon label="Facebook" Icon={FaFacebookF} />
    <SocialIcon label="WhatsApp" Icon={FaWhatsapp} />
    <SocialIcon label="Viber" Icon={FaViber} />
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
