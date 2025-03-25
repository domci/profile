'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// The access code
const CORRECT_CODE = 'DOM15APRO';

export default function AccessPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Access Required</CardTitle>
          <CardDescription>Please enter the access code to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter access code"
              disabled={isSubmitting}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Checking...' : 'Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 