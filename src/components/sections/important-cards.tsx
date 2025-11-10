import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    imageSrc: 'https://placehold.co/400x300/e0e0e0/1a1a1a?text=Our+Impact',
    imageAlt: 'Artistic image of hands holding Earth with natural background',
    title: 'Our impact',
    description: 'We want to operate in a way that positively impacts current generations – without compromise for future generations.',
    link: '#',
  },
  {
    imageSrc: 'https://placehold.co/400x300/e0e0e0/1a1a1a?text=NET',
    imageAlt: 'A student studying attentively',
    title: 'NET',
    description: 'The Navitas Education Trust (NET) supports innovative organisations bringing education opportunities to people around the world.',
    link: '#',
  },
];

const ImportantCards = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-center text-[2.5rem] font-bold text-foreground mb-12 leading-tight">
          What's important to us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] flex flex-col"
            >
              <div className="w-full">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[1.75rem] font-bold text-foreground mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-lg text-foreground mb-8 flex-grow">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="inline-block text-center bg-accent text-accent-foreground font-semibold py-3 px-6 rounded-md hover:bg-accent/90 transition-colors mt-auto self-start"
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantCards;