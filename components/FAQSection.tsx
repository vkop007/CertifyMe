import { Plus } from "lucide-react";
import { FAQS } from "../lib/index";

export default function FAQSection() {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white">
      <div className="container-custom px-4 md:px-6">

        {/* IMPORTANT CHANGE HERE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-xs md:text-sm font-semibold mb-4">
              FAQ Questions
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
              Frequently asked <br className="hidden lg:block" />
              Questions
            </h2>

            <p className="text-sm md:text-base text-text-light mb-6">
              Can't find the answer you're looking for? Check out our
              documentation or contact our team.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="lg:col-span-8 flex flex-col gap-3 md:gap-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-100 rounded-xl lg:rounded-2xl open:shadow-md transition-all"
              >
                <summary
                  className="
                    flex items-center justify-between
                    px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6
                    cursor-pointer list-none
                    font-semibold text-text-dark
                    text-sm md:text-base lg:text-lg
                  "
                >
                  <span className="pr-3">{faq.question}</span>

                  <div
                    className="
                      w-7 h-7 md:w-8 md:h-8
                      rounded-full bg-gray-100
                      flex items-center justify-center
                      text-gray-500 shrink-0
                      group-open:bg-primary group-open:text-white
                      transition-colors
                    "
                  >
                    <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 group-open:rotate-45 transition-transform" />
                  </div>
                </summary>

                <div
                  className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 text-sm md:text-base text-text-light leading-relaxed"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
