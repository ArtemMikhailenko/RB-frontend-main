"use client"
import ProfileInformation from '@/components/Setting/ProfileInformation/ProfileInformation'
import React,{ useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUserInformation} from '@/services/profileSetting'

const page = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getUserInformation();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <div className='px-5 sm:py-10 py-5'>
         <Link href="/setting" className=''>
          <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
        </Link>
        <ProfileInformation  profile={profile}/>
        {/* profile={profile} */}
    </div>
  )
}

export default page