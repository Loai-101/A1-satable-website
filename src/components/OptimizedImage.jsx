import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  onLoad, 
  onError,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
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
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage; 