import Image from "next/image";
import { Quote } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-8 pb-20">
      <div className="container-custom">
        <div className="bg-[#0F8A5F] rounded-[3rem] relative overflow-hidden min-h-[600px] flex items-center">
          {/* Background overlay/shape if needed */}

          <div className="w-full grid md:grid-cols-2 gap-8 items-center relative z-10 p-8 md:p-16">
            {/* Left Content */}
            <div className="text-white max-w-xl pt-10 md:pt-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium tracking-wider mb-6 border border-white/20">
                ROCKET ENHANCE YOUR LIFE
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
                Transform <br />
                <span className="text-[#4ADE80]">Your Skills and</span> <br />
                Career!
                {/* Underline decoration */}
                <div className="h-1 w-32 bg-[#FCD34D] mt-2 rounded-full opacity-80"></div>
              </h1>

              <p className="text-green-50 mb-10 text-lg max-w-md leading-relaxed">
                Meet the platform for modern design education. Master soft
                technical skills taught by industry experts.
              </p>

              <button className="bg-[#22C55E] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#16A34A] transition-colors shadow-lg shadow-green-900/20">
                Browse Courses
              </button>

              {/* Stats */}
              <div className="flex items-center gap-12 mt-16 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-3xl font-bold">769+</h3>
                  <p className="text-xs text-green-200">Recorded video</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">1200+</h3>
                  <p className="text-xs text-green-200">Happy Students</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">10+</h3>
                  <p className="text-xs text-green-200">Course Topic</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image & Testimonial */}
            <div className="relative h-full flex items-end justify-center md:justify-end mt-10 md:mt-0">
              {/* Testimonial Card */}
              <div className="absolute top-[40%] left-[-20px] md:left-0 z-20 bg-white p-5 rounded-2xl shadow-xl max-w-[240px] animate-[float_4s_ease-in-out_infinite]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="flex items-center justify-center w-full h-full bg-gray-300 text-xs">
                      AS
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Adam Smith
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      Student | Batch- 01
                    </p>
                  </div>
                </div>
                <Quote className="w-4 h-4 text-green-500 mb-2 fill-current" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  An amazing platform for skill seekers that helps you look for
                  a better job easily.
                </p>
              </div>

              {/* Student Image */}
              <Image
                src="/hero-student.png"
                alt="Student with backpack"
                width={600}
                height={800}
                className="relative z-10 object-contain max-h-[600px] w-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Custom Shape Divider (Curved edge similar to image) */}
          <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white rounded-tl-[3rem] z-0 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
