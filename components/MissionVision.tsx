"use client";

export default function MissionVision() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

          {/* OUR MISSION */}
          <div className="relative max-w-xl">

            <span className="inline-flex items-center px-4 py-1.5 mb-5 rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 tracking-wide">
              OUR MISSION
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1C39] mb-6">
              Empowering Growth Through
              <span className="text-emerald-600"> IT Excellence</span>
            </h3>

            <div className="pl-6 border-l-4 border-emerald-500 text-gray-700 leading-relaxed text-[15px]">
              <p>
                Transforming IT education and certification accessibility by
                delivering unparalleled IT training and affordable certification
                vouchers, empowering growth, innovation, and success in a
                competitive digital world.
              </p>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="relative max-w-xl ml-auto">

            <span className="inline-flex items-center px-4 py-1.5 mb-5 rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 tracking-wide">
              OUR VISION
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1C39] mb-6">
              Building a
              <span className="text-emerald-600"> Trusted Global IT Community</span>
            </h3>

            <div className="pl-6 border-l-4 border-emerald-500 text-gray-700 leading-relaxed text-[15px]">
              <p>
                To become the most trusted global reseller of discounted IT exam
                vouchers and IT certification training provider, fostering an
                international community of skilled professionals who drive
                innovation, champion diversity, and shape the future of the IT
                industry.
              </p>
            </div>
          </div>

        </div>

        {/* SOFT BACKGROUND DECOR */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
