const PARTNERS = [
  "AWS",
  "Microsoft",
  "VMware",
  "Fortinet",
  "Check Point",
  "Juniper",
  "CompTIA",
  "Oracle",
  "ISTQB",
  "Kubernetes",
  "Salesforce",
  "Cisco",
  "Splunk",
  "Pega",
];

const LOGOS = [...PARTNERS, ...PARTNERS]; // Duplicate for seamless scrolling

export default function CategorySection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mb-20">
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden py-10 group">
          <div className="flex w-max animate-scroll">
            {LOGOS.map((partner, index) => (
              <div
                key={index}
                className="mx-6 w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <span className="text-xl font-bold text-gray-500 lg:text-2xl group-hover:text-primary transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <div className="container-custom text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
          Achieve New Heights in IT with discounted <br />
          Exam Vouchers and Training <br />
          <span className="gradient-text">Solutions</span>
        </h2>

        <p className="text-text-light text-lg leading-relaxed">
          Welcome to Global IT Success, a renowned provider of IT exam vouchers
          and world-class IT training. Whether you are a seasoned professional
          or just started on your maiden voyage in tech, we provide the tools
          and knowledge you need to chart your course toward your professional
          goals. We offer authenticated discounted IT exam vouchers for a wide
          range of leading certification providers on globally recognized IT
          certifications including CompTIA, Oracle, AWS, VMware, Microsoft,
          ISTQB, Kubernetes, Salesforce, DELLEMC, SAS, EC-Council, Pega, Splunk,
          and Cisco.
        </p>
      </div>
    </section>
  );
}
