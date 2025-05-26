
import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
    