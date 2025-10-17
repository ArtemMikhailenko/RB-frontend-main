'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token); // store token
      router.replace('/news'); // redirect without keeping callback in history
    } else {
      alert('Google login failed');
      router.replace('/register');
    }
  }, [token, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Signing you in...</p>
    </div>
  );
}
