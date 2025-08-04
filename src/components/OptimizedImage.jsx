import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  onLoad, 
  onError,
  showLoading = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  if (hasError) {
    return (
      <div className={`image-error ${className}`}>
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`optimized-image-container ${className}`}>
      {isLoading && showLoading && (
        <div className="image-loading">
          <LoadingSpinner size="small" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage; 