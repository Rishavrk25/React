import React from "react";
import Heading from "./components/Heading";
import Para1 from "./components/Para1";
import Para2 from "./components/Para2";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-3xl space-y-8 max-w-2xl mx-auto">
        <Heading />
        <Para1 />
        <Para2 />
      </div>
    </main>
  );
};

export default App;
