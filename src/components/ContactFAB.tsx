import Image from 'next/image';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=918086511165&text=Hi%20!%20I%20would%20like%20to%20get%20some%20information.%20Please%20help%20me';

export default function ContactFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-[888] w-[54px] h-[54px] rounded-full overflow-hidden shadow-fab transition-all duration-250 hover:scale-[1.08]"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={54}
        height={54}
        className="w-full h-full object-cover"
      />
    </a>
  );
}
