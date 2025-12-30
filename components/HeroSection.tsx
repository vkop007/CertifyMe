import Image from "next/image";
import { Quote, Sparkles, PlayCircle, Users, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl m-auto rounded-3xl p-20 pt-12 pb-5 lg:pt-8 lg:pb-10 overflow-hidden bg-linear-to-br from-[#0D9488] via-[#059669] to-[#047857]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#34D399]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/file.svg')] opacity-[0.03] bg-repeat pointer-events-none mix-blend-color-dodge" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-lg mb-8 animate-[fadeIn_1s_ease-out]">
              <Sparkles className="w-4 h-4 text-[#FCD34D]" />
              <span className="text-sm font-semibold tracking-wide">
                UNLOCK YOUR POTENTIAL
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Master New <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6EE7B7] to-[#34D399]">
                Digital Skills
              </span>{" "}
              <br />
              With Experts
            </h1>

            <p className="text-lg text-emerald-50/90 mb-10 leading-relaxed font-light max-w-lg">
              Unlock your true potential with our industry-leading courses. Join
              a community of thousands of learners achieving their dreams.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="group bg-white text-[#059669] px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-1 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button className="flex items-center gap-3 text-white font-medium hover:text-[#6EE7B7] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                  <PlayCircle className="w-6 h-6 fill-current" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1 text-emerald-200">
                  <PlayCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Courses
                  </span>
                </div>
                <p className="text-3xl font-bold">150+</p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1 text-emerald-200">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Students
                  </span>
                </div>
                <p className="text-3xl font-bold">12k+</p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1 text-emerald-200">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Experts
                  </span>
                </div>
                <p className="text-3xl font-bold">45+</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Composition */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -z-10" />

            {/* Main Image */}
            <div className="relative z-10 w-full lg:max-w-none flex flex-col items-center">
              {/* Image Container with subtle border/glow */}
              <div className="relative rounded-[3rem] overflow-visible">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] blur-sm transform rotate-3 scale-105" />
                <Image
                  src="/hero.png"
                  alt="Student with backpack"
                  width={850}
                  height={1000}
                  className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 w-full max-h-[800px]"
                  priority
                />
                <div className="flex gap-3">
                  <Image
                    src="/logos/comptia.webp"
                    alt="Comptia"
                    width={120}
                    height={120}
                    className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                    priority
                  />
                  <Image
                    src="/logos/oracle.webp"
                    alt="Oracle"
                    width={120}
                    height={120}
                    className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                    priority
                  />
                  <Image
                    src="/logos/microsoft.webp"
                    alt="Microsoft"
                    width={120}
                    height={120}
                    className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                    priority
                  />
                  <Image
                    src="/logos/vmware.webp"
                    alt="VMware"
                    width={120}
                    height={120}
                    className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                    priority
                  />
                </div>
                <div>
                  <div className="flex gap-3 mt-5">
                    <Image
                      src="/logos/aws.webp"
                      alt="AWS"
                      width={120}
                      height={120}
                      className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                      priority
                    />
                    <Image
                      src="/logos/salesforce.webp"
                      alt="Salesforce"
                      width={120}
                      height={120}
                      className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                      priority
                    />
                    <Image
                      src="/logos/kubernetes.webp"
                      alt="Kubernetes"
                      width={120}
                      height={120}
                      className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                      priority
                    />
                    <Image
                      src="/logos/istqb.webp"
                      alt="ISTQB"
                      width={120}
                      height={120}
                      className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 bg-white rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
