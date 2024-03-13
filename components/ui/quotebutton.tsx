import React from 'react';
import { Button } from './button';

interface QuoteButtonProps {
  onClick: () => void;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant={'default'}>
      Get Random Quote
    </Button>
  );
};

export default QuoteButton;
