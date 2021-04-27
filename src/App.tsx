import React from 'react';
import './App.css';
import Tables from './tables'

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 p-7">
      <div className="px-4 py-3 text-left text-lg font-medium text-gray-600 uppercase tracking-wider">
        ✍️ What&apos;s in my Tech-Blog
      </div>
      <Tables />
    </div>
  );
};

export default App;
