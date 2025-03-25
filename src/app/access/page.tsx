'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';

// The access code
const CORRECT_CODE = 'DOM15APRO';

export default function AccessPage() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Check for access code in URL
  useEffect(() => {
    const accessCode = searchParams.get('accesscode');
    if (accessCode === CORRECT_CODE) {
      document.cookie = "access_token=valid; path=/; max-age=604800"; // 7 days
      window.location.href = '/';
    }
  }, [searchParams]);

  // Simulate typing effect for title
  useEffect(() => {
    const title = 'Access Required';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayedTitle(title.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!code) {
      setError('Please enter an access code');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simple client-side verification
    setTimeout(() => {
      if (code.trim() === CORRECT_CODE) {
        // Set cookie and redirect
        document.cookie = "access_token=valid; path=/; max-age=604800"; // 7 days
        window.location.href = '/';
      } else {
        setError('Invalid access code');
        setIsSubmitting(false);
      }
    }, 500); // Simulate server delay
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4"
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />

      <Card className="w-[400px] bg-gray-900/80 border border-blue-500/20 shadow-xl backdrop-blur-sm relative z-10">
        <CardHeader className="border-b border-blue-500/20">
          <CardTitle className="font-mono text-blue-400">
            {displayedTitle}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              {!titleComplete ? '_' : ''}
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400 font-mono">
            &#62; Enter authorized credentials to proceed...
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4 font-mono">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <span className="mr-2">$</span>
              <span>authenticate --user recruiter</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-blue-400">&#62;</span>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter access code"
                disabled={isSubmitting}
                className="bg-gray-900 border-blue-500/20 text-blue-400 font-mono focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
              />
            </div>
            {error && (
              <div className="text-sm text-red-400 font-mono mt-2">
                <span className="mr-1">!</span>ERROR: {error}
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono mt-4 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? '$ Authenticating...' : '$ Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 