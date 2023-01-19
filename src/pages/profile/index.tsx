import Layout from '@/components/layout/Layout'
import LeftSide from './left-side'
import Center from './center'
import RightSide from './right-side'
import { useRef } from 'react'


const ProfilePage = () => {
  return (
    <Layout>
      <div className='grid grid-cols-11 gap-x-10 bg-slate-200'>
        <div className='col-span-3'>
          <LeftSide />
        </div>
        <div className='col-span-7'>
          <Center />
        </div>
        <div className='bg-[#FAFAFA] h-screen border inline-flex items-center justify-center'>
          <RightSide />
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage