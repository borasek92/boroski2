import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  image, 
  link,
  reverse = false 
}) {
  return (
    <div className={`card overflow-hidden ${reverse ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-6 lg:gap-10`}>
      {/* Image section */}
      <div className="lg:w-2/5 relative">
        <div className="w-full aspect-video bg-dark-500 rounded-lg overflow-hidden relative">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-primary-500/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9C9.5 8.17157 10.1716 7.5 11 7.5H13C13.8284 7.5 14.5 8.17157 14.5 9C14.5 9.82843 13.8284 10.5 13 10.5H11C10.1716 10.5 9.5 9.82843 9.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 15C9.5 14.1716 10.1716 13.5 11 13.5H13C13.8284 13.5 14.5 14.1716 14.5 15C14.5 15.8284 13.8284 16.5 13 16.5H11C10.1716 16.5 9.5 15.8284 9.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {/* Content section */}
      <div className="lg:w-3/5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {/* Technologies used */}
        {tech && tech.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">Wykorzystane technologie:</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-dark-600 rounded-full text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Link to more details */}
        {link && (
          <div className="mt-6">
            <Link href={link} className="btn-outline text-sm py-2">
              <span>Szczegóły wdrożenia</span>
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}