import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    imageAlt: "Professional man in a business setting",
    title: "Agents",
    description: "Find out how to become a Navitas agent. Explore resources and discover opportunities.",
    link: "#",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    imageAlt: "Students in a collaborative setting with red chairs",
    title: "Universities",
    description: "Find high-quality international opportunities and expand your offerings to all corners of the globe.",
    link: "#",
  },
];

const PartnerCards = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-center text-dark-text text-[2.5rem] font-bold leading-tight mb-12">
          Partner with us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card) => (
            <div key={card.title} className="flex flex-col bg-secondary rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-dark-text text-[1.75rem] font-bold mb-4">{card.title}</h3>
                <p className="text-dark-text text-lg mb-8 flex-grow">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  className="inline-block bg-[#C4008C] text-white font-semibold text-center px-6 py-3 rounded-md transition-colors hover:brightness-90 mt-auto self-start"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCards;