import { Tooltip } from 'react-tooltip'

const IMG = "/images/your-image.png"
const resolveDescription = (text: string) => {
  const LIMIT = 80
  return text.length > LIMIT ? `${text.slice(0, LIMIT)}...` : text
}

const Profile = () => {
  const FirstSection = () => (
    <div className="flex flex-row">
      <div className={`bg-[#d4e94c] w-28 h-36 mt-96 pt-3 inline-flex justify-center`}>
        <div className="flex flex-col items-center">
          <img src="/icons/twitter.svg" className="w-5 h-5" />
          <img src="/icons/linkedin.svg" className="w-5 h-5 mt-4" />
          <img src="/icons/facebook.svg" className="w-5 h-5 mt-4" />
          <img src="/icons/dribble.svg" className="w-5 h-5 mt-4" />
          <img src="/icons/twitter.svg" className="w-5 h-5 mt-4" />
          <img src="/icons/twitter.svg" className="w-5 h-5 mt-4" />
        </div>
      </div>
      <div className="flex flex-col items-start mt-32 pl-24">
        <span className="text-xl text-white font-semibold">Hello, My Name Is</span>
        <span className={`text-[#d4e94c] mt-16 mb-16`} style={{ fontSize: 120, fontWeight: 700 }}>Robel</span>
        <span className={`text-[#d4e94c] mt-10 mb-16`} style={{ fontSize: 120, fontWeight: 700 }}>Tamiru</span>
        <span className="text-white text-3xl">Call Me <span className="text-5xl">Dotphic</span></span>
      </div>
      <div className="flex flex-row">
        <div className={`bg-[#d4e94c] w-16 h-20 ml-20 mt-32`}></div>
        <div className={`bg-[#d4e94c] w-32 h-36 mt-[450px]`}></div>
        <div className={`bg-[#d4e94c] flex flex-col items-center px-4 py-2 ml-8 mt-16`}>
          <div className="h-96">
            <img src="/images/avatar-bg.png" />
          </div>
        </div>
        <div className={`bg-[#d4e94c] w-32 h-36 ml-6 mt-[350px] flex flex-col items-center`}></div>
      </div>
    </div>
  )

  const SecondSection = () => (
    <div>
      <div className="ml-[520px] mt-36">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <img src="/images/mail.png" className="w-8" />
            <span className="text-white ml-2">robsizerx@gmail.com</span>
          </div>
          <div className={`bg-[#d4e94c] w-48 h-8 mt-8`} style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}></div>
        </div>
      </div>
      <div className="mt-16 pl-12">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <img src="/images/image-1.png" className="pl-20 rounded-md z-10 w-[423px] h-[325px]" />
            <div className={`bg-[#d4e94c] absolute w-48 h-48 ml-8 mt-44`}></div>
          </div>
          <div className="ml-20 flex flex-col">
            <span className="text-white text-5xl italic mb-4">I'm <span className={`text-5xl italic text-[#d4e94c]`}>Robel Tamiru</span></span>
            <span className="text-white text-5xl italic">I'm <span className={`text-5xl italic text-[#d4e94c]`}>Your Guy</span></span>
            <div className="flex flex-row">
              <span className="text-white text-md mt-10 w-[530px]">
                Greetings my name is ROBEL TAMIRU and I go by dotphic. I'm an architect who is 22 years old
                and have a passion for sound and visuals. My goal in life is to excel in digital art, and I plan
                to it through perseverance and hard effort.
              </span>
              <div>
                <img src="/images/image-2.png" className="w-[280px] h-[500px] absolute right-10 pt-20 z-10 rounded" />
                <div className={`bg-[#d4e94c] absolute right-0 w-64 h-72 ml-48`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ThirdSection = () => (
    <div className={`mt-56 bg-[#d4e94c]`}>
      <div className="inline-flex">
        <div className={`mt-64 px-16 h-64 bg-[#000000]`} />
        <div className="inline-flex items-center px-48 py-32">
          <div className="w-2/3 flex flex-col pr-10">
            <span className={`font-semibold text-lg text-[#000000]`}>My Skills</span>
            <span className={`text-5xl leading-1 font-bold text-[#000000] mt-4 mb-4`}>You Can Imagine</span>
            <span className={`text-5xl leading-9 font-bold text-[#000000] mb-4`}>What I Can Do</span>
            <span className={`text-[#000000] mt-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi sunt totam ipsum aut quam saepe, aliquid omnis accusamus ea nam. Eligendi excepturi quibusdam odio quaerat repellat dicta eos hic!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi sunt totam ipsum aut quam saepe, aliquid omnis accusamus ea nam. Eligendi excepturi quibusdam odio quaerat repellat dicta eos hic!
            </span>
          </div>
          <div className="w-1/3 flex flex-col">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <span>Music Production</span>
                <span>86%</span>
              </div>
              <div className="bg-white w-96 h-2 mt-3 rounded-md">
                <div className={`bg-[#000000] rounded-md h-2 w-[86%]`}></div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex flex-row justify-between">
                <span>Graphics Design</span>
                <span>90%</span>
              </div>
              <div className="bg-white w-96 h-2 mt-3 rounded-md">
                <div className={`bg-[#000000] rounded-md h-2 w-[90%]`}></div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex flex-row justify-between">
                <span>Architechtural Design</span>
                <span>66%</span>
              </div>
              <div className="bg-white w-96 h-2 mt-3 rounded-md">
                <div className={`bg-[#000000] rounded-md h-2 w-[66%]`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FourthSection = () => (
    <div>
      <div className={`bg-[#d4e94c] -mt-20 pb-16`}>
        <div className="flex flex-col items-center w-full">
          <span className="italic text-white">I'm the guy for you</span>
          <span className="text-white text-5xl mt-4 mb-8">Check some of my works</span>
          <div className="inline-flex justify-around w-full px-96">
            <span className="text-white text-sm">All</span>
            <span className="text-white text-sm">Graphic Design</span>
            <span className="text-white text-sm">Music Design</span>
            <span className="text-white text-sm">Animation Development</span>
          </div>
        </div>
      </div>
      <div className={`bg-[#000000] pb-48`}>
        <div className="absolute w-[400px] h-[250px] border-[4px] border-white -mt-24 ml-16" />
        <div className="inline-flex justify-center w-full -mt-12">
          <div className="grid grid-cols-3 gap-6">
            <img src="/images/project-image-1.png" className="w-[300px] h-[300px] rounded-md z-10" />
            <img src="/images/project-image-2.png" className="w-[300px] h-[300px] rounded-md" />
            <img src="/images/project-image-3.png" className="w-[300px] h-[300px] rounded-md" />
            <img src="/images/project-image-4.png" className="w-[300px] h-[300px] rounded-md" />
            <img src="/images/project-image-5.png" className="w-[300px] h-[300px] rounded-md" />
            <img src="/images/project-image-6.png" className="w-[300px] h-[300px] rounded-md z-10" />
          </div>
        </div>
        <div className="absolute right-0 w-[420px] h-[250px] border-[4px] border-white mr-16 -mt-48" />
      </div>
    </div>
  )

  const FifthSection = () => (
    <div className="pb-10">
      <div className={`absolute right-0 h-48 w-16 -mt-24 bg-[#d4e94c]`} />
      <div className={`flex flex-col mx-48 items-center`}>
        <div className="inline-flex items-center justify-between w-full">
          <div className="flex flex-col mx-auto">
            <span className="text-white text-lg">What I Can do...</span>
            <span className="text-white text-4xl mt-4">My Services</span>
          </div>

          <div className={`pl-8 pr-24 pt-10 pb-16 bg-[#d4e94c] inline-flex rounded-md mb-4`}>
            <img src="/images/music-avatar.png" className="w-[90px] h-[90px] mr-4" />
            <div className="flex flex-col">
              <span className={`text-[#000000] text-3xl font-semibold mb-3`}>Music Production</span>
              <span className={`text-[#000000] text-sm w-72`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda sapiente harum quae unde explicabo totam exercitationem inventore eos, omnis accusamus veritatis ullam praesentium quis consequatur fuga mollitia suscipit modi?
              </span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-between w-full">
          <div className={`pl-8 pr-24 pt-10 pb-10 bg-[#d4e94c] inline-flex rounded-md mr-8 -mt-16`}>
            <img src="/images/photo-avatar.png" className="w-[90px] h-[90px] mr-4" />
            <div className="flex flex-col">
              <span className={`text-[#000000] text-3xl font-semibold mb-3`}>Photography & Video</span>
              <span className={`text-[#000000] text-sm w-96`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda sapiente harum quae unde explicabo totam exercitationem inventore eos, omnis accusamus veritatis ullam praesentium quis consequatur fuga mollitia suscipit modi?
              </span>
            </div>
          </div>

          <div className={`pl-8 pr-24 pt-10 pb-16 bg-[#d4e94c] inline-flex rounded-md mt-4`}>
            <img src="/images/graphic-avatar.png" className="w-[90px] h-[90px] mr-4" />
            <div className="flex flex-col">
              <span className={`text-[#000000] text-3xl font-semibold mb-3`}>Graphic Design</span>
              <span className={`text-[#000000] text-sm w-72`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda sapiente harum quae unde explicabo totam exercitationem inventore eos, omnis accusamus veritatis ullam praesentium quis consequatur fuga mollitia suscipit modi?
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex mt-10">
        <div className={`h-40 w-40 mt-16 mr-10 bg-[#d4e94c]`} />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="bg-red-500 h-1 w-5 mb-2 ml-2" />
            <div className="inline-flex">
              <div className={`h-10 w-10 bg-[#d4e94c]`} style={{ borderRadius: 50 }} />
              <div className="flex flex-col ml-4">
                <span className={`text-[#d4e94c] text-2xl mb-1 font-semibold`}>Personal Traits</span>
                <span className={`text-[#d4e94c] font-semibold`}>Creative and open minded</span>
                <span className={`text-[#d4e94c] font-semibold`}>Time Efficient and Good Management</span>
                <span className={`text-[#d4e94c] font-semibold`}>Consistency and Flexibility</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <div className="inline-flex">
              <div className={`h-10 w-10 bg-[#d4e94c]`} style={{ borderRadius: 50 }} />
              <div className="flex flex-col ml-4">
                <span className={`text-[#d4e94c] text-2xl mb-1 font-semibold`}>Technical Traits</span>
                <span className={`text-[#d4e94c] font-semibold`}>Character Design</span>
                <span className={`text-[#d4e94c] font-semibold`}>Color, Composition and Grading</span>
                <span className={`text-[#d4e94c] font-semibold`}>Shapes & Patters</span>
                <span className={`text-[#d4e94c] font-semibold`}>Blending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SixthSection = () => (
    <div className={`bg-[#d4e94c] py-10`}>
      <div className="w-3/5 inline-flex justify-around mb-10">
        <div className="flex flex-col items-center">
          <span className="text-white">Get in Touch</span>
          <span className={`text-[#000000] text-4xl font-semibold mt-5 mb-3`}>Connect with Me with</span>
          <span className={`text-[#000000] text-4xl font-semibold mb-4`}>Confidence</span>
        </div>
        <div className="inline-flex items-end">
          <span className="text-2xl font-semibold mr-6">Testimonials</span>
          <img src="/images/quotes.png" />
        </div>
      </div>

      <div className="inline-flex justify-between w-full">
        <div className="border-[4px] border-l-0 border-white inline-flex">
          <div className={`w-16 h-48 bg-[#000000] mt-10`} />
          <div className="inline-flex pt-5 pb-10 px-10">
            <div className="flex flex-col items-center mr-10">
              <img src="/icons/twitter.svg" className="w-5 h-5" />
              <img src="/icons/linkedin.svg" className="w-5 h-5 mt-4" />
              <img src="/icons/facebook.svg" className="w-5 h-5 mt-4" />
              <img src="/icons/dribble.svg" className="w-5 h-5 mt-4" />
              <img src="/icons/twitter.svg" className="w-5 h-5 mt-4" />
              <img src="/icons/twitter.svg" className="w-5 h-5 mt-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className={`text-[#000000] text-lg font-semibold mb-1`}>Call Me</span>
                <span className={`text-[#000000] text-xl font-bold`}>+251940257052</span>
              </div>
              <div className="flex flex-col mt-4">
                <span className={`text-[#000000] text-lg font-semibold mb-1`}>Email</span>
                <span className={`text-[#000000] text-xl font-bold`}>robsizerex@gmail.com</span>
              </div>
              <div className="flex flex-col mt-4">
                <span className={`text-[#000000] text-lg font-semibold mb-1`}>@dotphic</span>
                <span className={`text-[#000000] text-sm`} style={{ fontWeight: 600 }}>in the following social media sites</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 pr-10">
          <div className={`bg-[#000000] flex flex-col w-72 py-6 pl-5`}>
            <div>
              <img src="/images/rating.png" />
            </div>
            <div className='flex flex-col'>
              <span className='text-white text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
              <span className='text-gray-400 text-sm'>
                {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
              </span>
              <div className='inline-flex items-center mt-10'>
                <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-white'>John Doe</span>
                  <span className='text-sm text-gray-500 text-white'>CEO of iWork Technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-[#000000] flex flex-col w-72 py-6 pl-5`}>
            <div>
              <img src="/images/rating.png" />
            </div>
            <div className='flex flex-col'>
              <span className='text-white text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
              <span className='text-gray-400 text-sm'>
                {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
              </span>
              <div className='inline-flex items-center mt-10'>
                <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-white'>John Doe</span>
                  <span className='text-sm text-gray-500 text-white'>CEO of iWork Technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-[#000000] flex flex-col w-72 py-6 pl-5`}>
            <div>
              <img src="/images/rating.png" />
            </div>
            <div className='flex flex-col'>
              <span className='text-white text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
              <span className='text-gray-400 text-sm'>
                {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
              </span>
              <div className='inline-flex items-center mt-10'>
                <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-white'>John Doe</span>
                  <span className='text-sm text-gray-500 text-white'>CEO of iWork Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  enum ScrollAmounts {
    SERVICES = 750,
    SKILLS = 1500,
    PORTFOLIO = 2900,
    CONTACT = 3700
  }
  const goTo = (amount: ScrollAmounts) => {
    window.scroll({
      behavior: 'smooth',
      top: amount
    })
  }
  
  const Navigator = () => (
    <div className='fixed right-0 flex flex-col my-[10%]' style={{ zIndex: 100 }}>
      <Tooltip anchorId='user-home' content='Home' place='top' />
      <Tooltip anchorId='user-services' content='My Services' place='top' />
      <Tooltip anchorId='user-education' content='Education' place='top' />
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
      <div onClick={() => goTo(ScrollAmounts.SKILLS)} className='mb-10' id='user-education'>
        <div className='bg-[#F0F0F6] py-[10px] px-[10px]' style={{ borderRadius: 80 }}>
          <img src="/icons/education.svg" className='w-5 h-5' />
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

  return (
    <div className={`bg-[#000000] w-full`}>
      <div className="flex flex-col">
        <div className={`bg-[#d4e94c] w-28 h-12`}></div>
        <Navigator />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </div>
  )
}

export default Profile