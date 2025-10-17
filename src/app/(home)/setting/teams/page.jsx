import Teams from '@/components/Setting/Teams/Teams'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <div className="px-4 md:py-10 py-5">
        <Link href="/setting" className="">
          <Image width={20} height={20} src="/icons/Setting/arrow.svg" alt="Goback" className="cursor-pointer" />
        </Link>
        <Teams />
      </div>
    </div>
  )
}

export default page ;