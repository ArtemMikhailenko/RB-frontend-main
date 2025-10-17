// app/(auth)/layout.jsx
import AuthNavbar from '@/shared/components/navbar/auth/AuthNavbar';
import Header from '@/shared/components/navbar/Header';
import '../globals.css'; // adjust path if needed

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}
