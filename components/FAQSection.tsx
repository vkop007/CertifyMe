import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Why should I choose DevSkill Academy?",
    answer:
      "We provide high-quality education with expert mentors and flexible learning options tailored to your needs.",
  },
  {
    question: "Do we get a certificate after course completion?",
    answer:
      "Yes, all our courses come with a verified certificate upon successful completion.",
  },
  {
    question: "How can I contact the support team?",
    answer:
      "You can reach our support team 24/7 via email or through our community discord server.",
  },
  {
    question: "Is there any refund policy?",
    answer:
      "We offer a 30-day money-back guarantee if you are not satisfied with our course content.",
  },
  {
    question: "Can I access the course material offline?",
    answer:
      "Yes, our mobile app allows you to download lessons for offline viewing.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-sm font-semibold mb-6">
            FAQ Questions
          </div>
          <h2 className="text-4xl font-bold text-text-dark mb-6">
            Frequently asked <br />
            Questions
          </h2>
          <p className="text-text-light mb-8">
            Can't find the answer you're looking for? Check out our
            documentation or contact our team.
          </p>
        </div>

        <div className="md:col-span-8 flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl open:shadow-md transition-all"
            >
              <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-text-dark text-lg">
                {faq.question}
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-open:bg-primary group-open:text-white transition-colors">
                  <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
                </div>
              </summary>
              <div className="px-6 pb-6 text-text-light leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
