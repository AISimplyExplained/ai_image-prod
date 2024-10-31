'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function VideoPlayerPage() {
  const [error, setError] = React.useState('');
  const videoUrl = "https://zwvflpimurtpqqzpprjo.supabase.co/storage/v1/object/public/videos/ai.mp4?t=2024-10-30T19%3A56%3A00.051Z";

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-vid', {
        method: 'GET',
      });

      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ai.mp4';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      setError('Failed to download video. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 space-y-6">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          className="w-full"
          poster="/api/placeholder/640/360"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Download Video
        </Button>
      </div>
    </div>
  );
}