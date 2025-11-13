import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';


export const WelcomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen from-slate-50 to-slate-100 flex items-center justify-center px-4 bg-linear-to-br">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Bienvenido
          </h1>
          <p className="text-lg text-slate-600 font-light">
            Simple, elegant, and ready for your vision
          </p>
        </div>

        <button
          onClick={() => {
            navigate('/auth/login')
          }}
          className="group inline-flex cursor-pointer items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all duration-200 hover:gap-3"
        >
          <span className="font-light">Comencemos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

