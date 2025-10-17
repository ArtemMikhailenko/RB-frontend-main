'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '@/shared/components/UserCard/UserCard';
import TopNavbar from '@/shared/components/navbar/Header';

export default function Layout({ children, opportunities ,setCustomerPopup}) {
  const [sidebar, setSidebar] = useState(true);
  const [cardshow, setCardshow] = useState(true);

  const cardRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setCardshow(false); // hide card if clicked outside
      } else {
        setCardshow(true);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <>
      <div ref={cardRef}>
        <TopNavbar
          setSidebar={setSidebar}
          cardshow={cardshow}
          setCardshow={setCardshow}
          opportunities={opportunities}
          setCustomerPopup={setCustomerPopup}
        />
        {children}
      </div>
      <div className="card-container">
        <Card cardshow={cardshow} setCardshow={setCardshow} />
      </div>
    </>
  );
}
