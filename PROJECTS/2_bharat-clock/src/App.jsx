import Heading from "./components/Heading";
import Para1 from "./components/Para1";
import Para2 from "./components/Para2";

const App = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Roboto+Mono:wght@700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
          
          .font-mono {
            font-family: 'Roboto Mono', monospace;
          }

          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animated-gradient {
            background-size: 200% 200%;
            animation: gradient-animation 10s ease infinite;
          }
        `}
      </style>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 animated-gradient">
        <div className="text-center bg-black/20 backdrop-blur-xl p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl space-y-2 max-w-2xl mx-auto">
          <Heading />
          <Para1/>
          <Para2 />
        </div>
      </main>
    </>
  );
};

export default App;