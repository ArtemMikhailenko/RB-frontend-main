'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function GoogleCallbackContent() {
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

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    }>
      <GoogleCallbackContent />
    </Suspense>
  );
}
