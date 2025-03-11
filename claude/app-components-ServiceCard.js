import Link from 'next/link';

export default function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="card group hover:translate-y-[-5px]">
      <div className="w-12 h-12 mb-4 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/30 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <Link href={link} className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
        <span>Dowiedz się więcej</span>
        <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}