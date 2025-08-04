import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = ({ children, loadingTime = 1000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

  if (isLoading) {
    return (
      <div className="page-loading-overlay">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return children;
};

export default PageLoader; 