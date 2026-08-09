import { useViewTransitionNavigate } from './useViewTransitionNavigate';
import { items } from './data';

function App() {
  const navigate = useViewTransitionNavigate();

  return (
    <div className="min-h-screen bg-slate-900 p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          Modern View Transitions API
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Native, fluid page transitions powered by the browser engine. 0kb of extra JavaScript for animations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => navigate(`/detail/${item.id}`)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-500 transition-colors"
          >
            <div className="h-48 overflow-hidden relative">
              {/* IMPORTANT: The view-transition-name must match exactly between the two views */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                style={{ viewTransitionName: `card-image-${item.id}` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${item.color} text-white`}
                    style={{ viewTransitionName: `card-badge-${item.id}` }}>
                {item.subtitle}
              </span>
              <h2 className="text-2xl font-bold text-white mb-2"
                  style={{ viewTransitionName: `card-title-${item.id}` }}>
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
