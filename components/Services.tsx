import React from 'react';
import Button from './Button';
import { servicePackages } from '@/data';

const Services = () => {
  return (
    <section id="services" className="w-full mt-16 mb-10 scroll-mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#06FCD8] mb-3">
        Services
      </h2>
      <p className="text-[#9a9a9a] xs:text-sm sm:text-base mb-8 max-w-[40rem]">
        Fixed-scope builds or weekly engagements. Every project starts with a short call to pin down scope.
      </p>

      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
        {servicePackages.map((pkg, idx) => (
          <div
            key={pkg.name}
            className="group flex flex-col bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#06FCD8] transition-all duration-300 hover:shadow-lg hover:shadow-[#06FCD8]/10"
          >
            <span className="text-xs font-semibold text-[#9a9a9a] mb-2">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-[#06FCD8] transition-colors mb-3">
              {pkg.name}
            </h3>
            <p className="text-[#9a9a9a] text-sm mb-6 flex-1">{pkg.desc}</p>
            <p className="text-lg font-bold text-[#06FCD8] mb-5">{pkg.price}</p>
            <Button text="Start a Project" link="https://t.me/arkkkade" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
