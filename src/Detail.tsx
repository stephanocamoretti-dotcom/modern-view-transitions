import { useParams } from 'react-router-dom';
import { useViewTransitionNavigate } from './useViewTransitionNavigate';
import { items } from './data';
import { ArrowLeft } from 'lucide-react';

export default function Detail() {
  const { id } = useParams();
  const navigate = useViewTransitionNavigate();
  const item = items.find(i => i.id === id);

  if (!item) return <div>Not found</div>;

  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      <div 
        className="w-full h-[50vh] relative overflow-hidden"
        style={{ viewTransitionName: `card-image-${item.id}` }}
      >
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-8 -mt-20 relative z-10">
        <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-6 ${item.color} text-white shadow-lg`}
              style={{ viewTransitionName: `card-badge-${item.id}` }}>
          {item.subtitle}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8"
            style={{ viewTransitionName: `card-title-${item.id}` }}>
          {item.title}
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            {item.description}
          </p>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-slate-400 mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
