
import React from 'react'
import Link from 'next/link'
import TaxInformation from '@/components/Setting/TaxInformation/TaxInformation'
import Image from 'next/image'
const page = () => {
  return (
       <div className='px-5 sm:py-10 py-5'>
         <Link href="/setting" className=''>
          <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
        </Link>
        <TaxInformation/>
    </div>
  )
}

export default page