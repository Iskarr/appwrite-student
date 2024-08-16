// components/LoadingWithProgress.tsx
import React, { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

interface LoadingWithProgressProps {
  fetchPosts?: () => Promise<any[]>; // The function to fetch posts is now optional
}

const LoadingWithProgress: React.FC<LoadingWithProgressProps> = ({
  fetchPosts,
}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchAndUpdateProgress = async () => {
      setLoading(true);
      setProgress(0);

      const incrementInterval = 50; // Interval for progress bar increment in milliseconds
      const totalProgress = 100;
      const progressIncrement = 20; // Increment progress by this amount
      const progressDuration =
        (totalProgress / progressIncrement) * incrementInterval;

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= totalProgress) {
            clearInterval(interval);
            return totalProgress;
          }
          return prev + progressIncrement;
        });
      }, incrementInterval);

      // Simulate a delay that matches the progress duration
      setTimeout(async () => {
        try {
          if (fetchPosts) {
            await fetchPosts(); // Fetch posts if the function is provided
          }
          // You can handle the fetched data here if needed
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        } finally {
          setLoading(false);
        }
      }, progressDuration); // Match this delay with progress duration
    };

    fetchAndUpdateProgress();
  }, [fetchPosts]);

  if (loading) return <LoadingSpinner progress={progress} />;

  return null; // Or return any other content when loading is done
};

export default LoadingWithProgress;
