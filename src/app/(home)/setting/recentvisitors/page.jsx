// import PaymentMethod from '@/components/settingcomponents/PaymentMethod/PaymentMethod'
import React from 'react'
import Link from 'next/link'
import ProfileVisitors from '@/components/Setting/ProfileVisitor/ProfileVisitors'
import Image from 'next/image'
const page = () => {
  return (
       <div className='px-4 sm:py-10 py-5'>
         <Link href="/setting" className=''>
          <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
        </Link>
        <ProfileVisitors/>
    </div>
  )
}

export default page