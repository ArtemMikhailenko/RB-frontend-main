import React from 'react'
import Link from 'next/link'
import ManageIntegration from '@/components/Setting/ManageIntegration/ManageIntegration'
import Image from 'next/image'
const page = () => {
  return (
    <div>
       <div className="px-4 md:py-10 py-5">
        <Link href="/setting" className="">
          <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
        </Link>
        <ManageIntegration />
      </div>
    </div>
  )
}

export default page