import { useEffect } from 'react'
import { Tooltip } from 'react-tooltip'

const RightSide = () => {
  enum ScrollAmounts {
    SERVICES = 500,
    EDUCATION = 1800,
    WORK_HISTORY = 2400,
    PORTFOLIO = 3100,
    CONTACT = 3600
  }
  const goTo = (amount: ScrollAmounts) => {
    window.scroll({
      behavior: 'smooth',
      top: amount
    })
  }

  const handleScroll = (e: any) => {
    console.log("ss", window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <Tooltip anchorId='user-home' content='Home' place='top' />
      <Tooltip anchorId='user-services' content='My Services' place='top' />
      <Tooltip anchorId='user-education' content='Education' place='top' />
      <Tooltip anchorId='user-work' content='Work History' place='top' />
      <Tooltip anchorId='user-portfolio' content='Portfolio' place='top' />
      <Tooltip anchorId='user-contact' content='Contact' place='top' />

      <div className='mb-10' id='user-home'>
        <div className='bg-[#FFB400] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/home.svg" className='w-5 h-5' />
        </div>
      </div>
      <div onClick={() => goTo(ScrollAmounts.SERVICES)} className='mb-10' id='user-services'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/code.svg" className='w-5 h-5' />
        </div>
      </div>
      <div onClick={() => goTo(ScrollAmounts.EDUCATION)} className='mb-10' id='user-education'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/education.svg" className='w-5 h-5' />
        </div>
      </div>
      <div onClick={() => goTo(ScrollAmounts.WORK_HISTORY)} className='mb-10' id='user-work'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/work.svg" className='w-5 h-5' />
        </div>
      </div>
      <div onClick={() => goTo(ScrollAmounts.PORTFOLIO)} className='mb-10' id='user-portfolio'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/portfolio.svg" className='w-5 h-5' />
        </div>
      </div>
      <div onClick={() => goTo(ScrollAmounts.CONTACT)} id='user-contact'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/contact.svg" className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default RightSide