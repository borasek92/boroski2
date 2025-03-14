'use client';

export default function SectionTitle({ subtitle, title }) {
  // Funkcja do parsowania i dodawania gradientu do tekstu w znacznikach <span>
  const parseTitle = (title) => {
    if (!title.includes('<span>')) return title;
    
    return title.split(/<span>|<\/span>/).map((part, index) => {
      if (index % 2 === 1) {
        // To jest część, która była w <span>
        return (
          <span 
            key={index} 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="text-center mb-16">
      <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        {parseTitle(title)}
      </h2>
    </div>
  );
}
