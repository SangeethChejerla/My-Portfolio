
import TestRandomQuotes from '@/components/quotetest';
import React from 'react';
export const metadata = {
  title: 'Quotes',
  description: 'Immerse yourself in a collection of thought-provoking quotes. These quotes are designed to inspire, motivate, and provoke reflection. Enjoy reading and feel free to share them.',
};

function Quotes() {
  return (
    <div className="App">
 
      <TestRandomQuotes/>
    </div>
  );
}

export default Quotes;
