import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const IMG = "/images/your-image.png"
const resolveDescription = (text: string) => {
  const LIMIT = 80
  return text.length > LIMIT ? `${text.slice(0, LIMIT)}...` : text
}


const SectionTop = () => (
  <div className='bg-[#FAFAFA] flex flex-col px-8 pt-10'>
    <div className='grid grid-cols-3 flex items-center'>
      <div className='flex flex-col col-span-2'>
        <span className='text-[#2B2B2B]' style={{ fontSize: 48, fontWeight: 600 }}>
          I'm Yeabsera Genene
        </span>
        <span className='text-[#2B2B2B] my-8' style={{ fontSize: 48, fontWeight: 600 }}>
          <span className='text-yellow-500'>Full Stack</span> Developer
        </span>
        <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam, maiores sequi cum enim porro placeat quis, est inventore a vitae obcaecati tenetur officia perspiciatis, blanditiis totam nam voluptas iusto.</span>
        <div className='mt-10'>
          {/* <CustomButton
            rightIcon={HiArrowRight}
          >
            HIRE ME
          </CustomButton> */}
          <ArrowLink
            as={ButtonLink}
            variant='light'
            className='inline-flex items-center'
            href='/'
          >
            HIRE ME
          </ArrowLink>
        </div>
      </div>
      <div>
        <img src="/images/your-image.png" className='h-96 w-full object-cover' />
      </div>
    </div>
  </div>
)

const MyServices = () => (
  <div className='mt-24 flex flex-col items-center' id="section-services">
    <span className='text-2xl text-[#2B2B2B]' style={{ fontWeight: 600 }}>My Services</span>
    <span className='text-gray-500 w-96 text-center my-4 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ratione eligendi! Reprehenderit adipisci</span>
    <div className='grid grid-cols-3 gap-6'>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-1.svg" className='w-16 h-16' />
        </div>
        <div className='flex  flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>Web Development</span>
          <span className='text-gray-500 text-sm'>Blog, E-Commerce</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-3.png" className='w-16 h-16' />
        </div>
        <div className='flex  flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>API Development</span>
          <span className='text-gray-500 text-sm'>RESTAPI, GraphQL</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-2.png" className='w-16 h-16' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>App Development</span>
          <span className='text-gray-500 text-sm'>React Native, Expo</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-4.png" className='w-16 h-16' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>DevOps Expert</span>
          <span className='text-gray-500 text-sm'>Kubernetes, AWS</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-5.png" className='w-16 h-16' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>UI/UX Design</span>
          <span className='text-gray-500 text-sm'>Mobile App, Web Design</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6'>
        <div className='inline-flex justify-center'>
          <img src="/images/skill-image-6.png" className='w-16 h-16' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>Testing & Documentation</span>
          <span className='text-gray-500 text-sm'>Snapshop, End-to-End Testing</span>
        </div>
      </div>
    </div>
  </div>
)

const Recommendations = () => (
  <div className='flex flex-col mb-16'>
    <div className='mt-24 mb-12 flex flex-col items-center'>
      <span className='text-2xl text-[#2B2B2B]' style={{ fontWeight: 600 }}>Recommendations</span>
      <span className='text-gray-500 w-96 text-center my-4 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ratione eligendi! Reprehenderit adipisci</span>
    </div>
    <div className='grid grid-cols-3 gap-6'>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6 pl-5'>
        <div>
          <img src="/images/rating.png" />
        </div>
        <div className='flex flex-col'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
          <span className='text-gray-500 text-sm'>
            {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
          </span>
          <div className='inline-flex items-center mt-10'>
            <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
            <div className='flex flex-col'>
              <span className='text-lg font-semibold'>John Doe</span>
              <span className='text-sm text-gray-500'>CEO of iWork Technologies</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6 pl-5'>
        <div>
          <img src="/images/rating.png" />
        </div>
        <div className='flex flex-col'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
          <span className='text-gray-500 text-sm'>
            {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
          </span>
          <div className='inline-flex items-center mt-10'>
            <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
            <div className='flex flex-col'>
              <span className='text-lg font-semibold'>John Doe</span>
              <span className='text-sm text-gray-500'>CEO of iWork Technologies</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border flex flex-col w-72 py-6 pl-5'>
        <div>
          <img src="/images/rating.png" />
        </div>
        <div className='flex flex-col'>
          <span className='text-[#2B2B2B] text-xl mt-5 mb-4'>Great Spirit & Amazing Quality</span>
          <span className='text-gray-500 text-sm'>
            {resolveDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sint similique voluptates architecto ea unde necessitatibus laborum accusantium voluptate. Libero qui quos nostrum ex aut cumque eius aliquam ad earum.")}
          </span>
          <div className='inline-flex items-center mt-10'>
            <img src={IMG} className="object-cover w-12 h-12 mr-3" style={{ borderRadius: 50 }} />
            <div className='flex flex-col'>
              <span className='text-lg font-semibold'>John Doe</span>
              <span className='text-sm text-gray-500'>CEO of iWork Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Education = () => (
  <div className='flex flex-col'>
    <div className="inline-flex justify-center mb-16">
      <img src="/images/section-break.png" />
    </div>
    <div className='mb-12 flex flex-col items-center'>
      <span className='text-2xl text-[#2B2B2B]' style={{ fontWeight: 600 }}>Education</span>
      <span className='text-gray-500 w-96 text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ratione eligendi! Reprehenderit adipisci</span>
    </div>
    <div className="bg-[#FAFAFA] px-8 py-12 mt-4">
      <div className="inline-flex">
        <div className="flex flex-col w-2/5">
          <span className="text-lg">Addis Ababa Science & Technology University</span>
          <div className="inline-flex items-center mt-4 justify-between pr-16">
            <span className="text-gray-500">Student</span>
            <div>
              <div className="bg-[#FFB400] px-1">
                <span className="text-white text-sm">Sept 2017 - Sept 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <span className="text-lg">BSc Software Engineering</span>
          <span className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, animi vitae debitis repellat enim omnis necessitatibus ipsum commodi quasi! Qui fuga deserunt impedit voluptatem molestiae id fugit, placeat quisquam.</span>
        </div>
      </div>
      <div className="border-t-[2px] border-gray w-full my-4"></div>
      <div className="inline-flex">
        <div className="flex flex-col w-2/5">
          <span className="text-lg">UI/UX Course</span>
          <div className="inline-flex items-center mt-4 justify-between pr-16">
            <span className="text-gray-500">Student</span>
            <div>
              <div className="bg-[#FFB400] px-1">
                <span className="text-white text-sm">Oct 2020 - Jan 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <span className="text-lg">Certificate of Web Training</span>
          <span className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, animi vitae debitis repellat enim omnis necessitatibus ipsum commodi quasi! Qui fuga deserunt impedit voluptatem molestiae id fugit, placeat quisquam.</span>
        </div>
      </div>
    </div>
  </div>
)

const WorkHistory = () => (
  <div className='flex flex-col mt-16'>
    <div className='mb-12 flex flex-col items-center'>
      <span className='text-2xl text-[#2B2B2B]' style={{ fontWeight: 600 }}>Work History</span>
      <span className='text-gray-500 w-96 text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ratione eligendi! Reprehenderit adipisci</span>
    </div>
    <div className="bg-[#FAFAFA] px-8 py-12 mt-4">
      <div className="inline-flex">
        <div className="flex flex-col w-2/5">
          <span className="text-lg">Fleet Simplify</span>
          <div className="inline-flex items-center mt-4 justify-between pr-16">
            <span className="text-gray-500">Full Time</span>
            <div>
              <div className="bg-[#FFB400] px-1">
                <span className="text-white text-sm">Feb 2021 - PRESENT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <span className="text-lg">Full Stack Engineer</span>
          <span className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, animi vitae debitis repellat enim omnis necessitatibus ipsum commodi quasi! Qui fuga deserunt impedit voluptatem molestiae id fugit, placeat quisquam.</span>
        </div>
      </div>
      <div className="border-t-[2px] border-gray w-full my-4"></div>
      <div className="inline-flex">
        <div className="flex flex-col w-2/5">
          <span className="text-lg">iWork Technologies</span>
          <div className="inline-flex items-center mt-4 justify-between pr-16">
            <span className="text-gray-500">Full Time</span>
            <div>
              <div className="bg-[#FFB400] px-1">
                <span className="text-white text-sm">Feb 2020 - Jan 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <span className="text-lg">Lead Developer</span>
          <span className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, animi vitae debitis repellat enim omnis necessitatibus ipsum commodi quasi! Qui fuga deserunt impedit voluptatem molestiae id fugit, placeat quisquam.</span>
        </div>
      </div>
      <div className="border-t-[2px] border-gray w-full my-4"></div>
      <div className="inline-flex">
        <div className="flex flex-col w-2/5">
          <span className="text-lg">Qene Technologies</span>
          <div className="inline-flex items-center mt-4 justify-between pr-16">
            <span className="text-gray-500">Full Time</span>
            <div>
              <div className="bg-[#FFB400] px-1">
                <span className="text-white text-sm">Nov 2017 - Dec 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <span className="text-lg">Backend Developer</span>
          <span className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, animi vitae debitis repellat enim omnis necessitatibus ipsum commodi quasi! Qui fuga deserunt impedit voluptatem molestiae id fugit, placeat quisquam.</span>
        </div>
      </div>
    </div>
  </div>
)

const Portfolio = () => (
  <div className='flex flex-col mt-16'>
    <div className='mb-12 flex flex-col items-center'>
      <span className='text-2xl text-[#2B2B2B]' style={{ fontWeight: 600 }}>Portfolio</span>
      <span className='text-gray-500 w-96 text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ratione eligendi! Reprehenderit adipisci</span>
    </div>
    <div className="inline-flex justify-center">
      <div className="inline-flex w-1/2 justify-between mb-10 cursor-pointer">
        <span className="text-[#FFB400] hover:text-[#2B2B2B]">All Categories</span>
        <span className="text-[#2B2B2B] hover:text-[#FFB400]">UI Designs</span>
        <span className="text-[#2B2B2B] hover:text-[#FFB400]">Project Screenshots</span>
        <span className="text-[#2B2B2B] hover:text-[#FFB400]">Websites</span>
      </div>
    </div>
    <div className="w-full h-48 bg-green-400"></div>
  </div>
)

const ContactInfo = () => (
  <div className="mt-16 grid grid-cols-6 gap-x-6" id="section-contact">
    <div className="flex flex-col col-span-4">
      <span className='text-2xl text-[#2B2B2B] mb-6' style={{ fontWeight: 600 }}>Leave Me Your Info</span>
      <div className="bg-[#FAFAFA] px-6 py-8">
        <div className="flex flex-col">
          <div className="flex flex-col mb-3">
            <span className="text-[#767676] mb-2">Your Full Name (Required)</span>
            <input className="w-full h-10 bg-[#F0F0F6] px-2" />
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-[#767676] mb-2">Email (Required)</span>
            <input className="w-full h-10 bg-[#F0F0F6] px-2" />
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-[#767676] mb-2">Subject</span>
            <input className="w-full h-10 bg-[#F0F0F6] px-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#767676] mb-2">Your Message</span>
            <textarea rows={5} className="w-full border-0 bg-[#F0F0F6] px-2" />
          </div>
          <button className="bg-[#FFB400] mt-10 py-2 inline-flex justify-center w-48">
            <span className="text-white">SEND MESSAGE</span>
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col col-span-2">
      <span className='text-2xl text-[#2B2B2B] mb-6' style={{ fontWeight: 600 }}>Contact Information</span>
      <div className="bg-[#FAFAFA] w-full flex flex-col pt-6 px-6 pb-4">
        <div className="inline-flex justify-center">
          <div className="bg-[#FFB400] p-2" style={{ borderRadius: 70 }}>
            <img src="/images/location.png" />
          </div>
        </div>
        <div className="mt-10 inline-flex justify-between">
          <span className="text-gray-500">Country:</span>
          <span className="text-gray-500">Ethiopia</span>
        </div>
        <div className="mt-4 inline-flex justify-between">
          <span className="text-gray-500">City:</span>
          <span className="text-gray-500">Addis Ababa</span>
        </div>
        <div className="mt-4 inline-flex justify-between">
          <span className="text-gray-500">Steet:</span>
          <span className="text-gray-500">Alem Bank, KK</span>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full flex flex-col pt-6 px-6 pb-4 mt-10">
        <div className="inline-flex justify-center">
          <div className="bg-[#FFB400] p-2" style={{ borderRadius: 70 }}>
            <img src="/images/mail.png" />
          </div>
        </div>
        <div className="mt-10 inline-flex justify-between">
          <span className="text-gray-500">Email:</span>
          <span className="text-gray-500">yeabsera0830@gmail.com</span>
        </div>
        <div className="mt-4 inline-flex justify-between">
          <span className="text-gray-500">Skype:</span>
          <span className="text-gray-500">@yeabsera0830</span>
        </div>
        <div className="mt-4 inline-flex justify-between">
          <span className="text-gray-500">Telegram:</span>
          <span className="text-gray-500">@async69</span>
        </div>
        <div className="mt-4 inline-flex justify-between">
          <span className="text-gray-500">Phone:</span>
          <span className="text-gray-500">+251944701899</span>
        </div>
      </div>
    </div>
  </div>
)

const Center = () => {
  return (
    <div className='border mb-10'>
      <SectionTop />
      <MyServices />
      <Recommendations />
      <Education />
      <WorkHistory />
      <Portfolio />
      <ContactInfo />
    </div>
  )
}

export default Center