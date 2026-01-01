"use client";

export default function WhatsAppButton() {
  const phoneNumber = "917984785177";
  const message = encodeURIComponent("Hello, I need course service");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        w-15
        h-15
        rounded-full
        bg-white
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        flex
        items-center
        justify-center
        hover:scale-110
        transition-transform
      "
    >
      <img
        src="/WhatsApp.svg"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </a>
  );
}
