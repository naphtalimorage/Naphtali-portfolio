import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleGoBack}
      className={`fixed top-4 left-4 z-10 ${className || ''}`}
      aria-label="Go back"
    >
      <ChevronLeft className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;