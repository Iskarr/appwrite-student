// components/LoadingSpinner.tsx
import React from "react";

interface LoadingSpinnerProps {
  progress: number; // Progress percentage from 0 to 100
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-1/2 max-w-md">
        <div
          className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition-all duration-500 dark:bg-blue-500"
            style={{ width: `${progress}%` }}
          >
            {/* Optionally, you can include text like "Loading..." here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
