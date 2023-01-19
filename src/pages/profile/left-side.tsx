const LeftSide = () => {
  const IMG = "/images/your-image.png"

  return (
    <div className='bg-[#FAFAFA] py-10 mx-auto border flex flex-col px-8'>
      <div className='flex flex-col items-center'>
        <img src={IMG} className="w-32 h-32 rounded object-cover" style={{ borderRadius: 100 }} />
        <span className='font-semibold text-lg mt-10'>Yeabsera Genene Bune</span>
        <span className='text-gray-400 text-sm mt-2'>Full Stack Developer</span>
        <div className='mt-4 flex flex-row justify-between w-full'>
          <div className='px-3 py-2 bg-[#FFB400]' style={{ borderRadius: 100 }}>
            <img src="/icons/facebook.svg" className='h-4 w-3' />
          </div>
          <div className='px-3 py-2 bg-[#FFB400]' style={{ borderRadius: 100 }}>
            <img src="/icons/instagram.svg" className='h-4 w-3' />
          </div>
          <div className='px-3 py-2 bg-[#FFB400]' style={{ borderRadius: 100 }}>
            <img src="/icons/twitter.svg" className='h-4 w-3' />
          </div>
          <div className='px-3 py-2 bg-[#FFB400]' style={{ borderRadius: 100 }}>
            <img src="/icons/linkedin.svg" className='h-4 w-3' />
          </div>
          <div className='px-3 py-2 bg-[#FFB400]' style={{ borderRadius: 100 }}>
            <img src="/icons/dribble.svg" className='h-4 w-3' />
          </div>
        </div>
      </div>
      <div className='border-t-[2.5px] border-gray-200 w-full mt-6 mb-4'></div>
      <div className='flex flex-col'>
        <span>Languages</span>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>English</span>
            <span className='text-gray-500 text-sm'>100%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[100%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Amharic</span>
            <span className='text-gray-500 text-sm'>100%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[100%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>German</span>
            <span className='text-gray-500 text-sm'>50%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[50%] rounded-md'></div>
          </div>
        </div>
      </div>
      <div className='border-t-[2.5px] border-gray-200 w-full mt-6 mb-4'></div>
      <div className='flex flex-col'>
        <span>Skills</span>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Node.js</span>
            <span className='text-gray-500 text-sm'>98%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[98%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>React / React Native</span>
            <span className='text-gray-500 text-sm'>90%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[90%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Next.js</span>
            <span className='text-gray-500 text-sm'>95%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[95%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Typescript + ESLint</span>
            <span className='text-gray-500 text-sm'>92%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[92%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Next.js</span>
            <span className='text-gray-500 text-sm'>95%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[95%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>Tailwind UI / Material UI</span>
            <span className='text-gray-500 text-sm'>99%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[99%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>MongoDB / Postgres</span>
            <span className='text-gray-500 text-sm'>99%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[99%] rounded-md'></div>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-500 text-sm'>NestJS / GraphQL</span>
            <span className='text-gray-500 text-sm'>99%</span>
          </div>
          <div className='mt-2 p-[1px] bg-[#FAFAFA] border-[0.2px] border-yellow-300 w-full rounded-md'>
            <div className='h-[3px] bg-yellow-500 w-[99%] rounded-md'></div>
          </div>
        </div>
      </div>
      <div className='border-t-[2.5px] border-gray-200 w-full mt-6 mb-4'></div>
      <div className='flex flex-col'>
        <span className='font-semibold'>Extra Skills</span>
        <div className='flex flex-row mt-4 items-center'>
          <img src="/icons/boxes.svg" className='w-4 h-4 mr-3' />
          <span className='text-gray-500'>Microservice Development (RabbitMQ / Molecular)</span>
        </div>
        <div className='flex flex-row mt-4 items-center'>
          <img src="/icons/boxes.svg" className='w-4 h-4 mr-3' />
          <span className='text-gray-500'>Docker</span>
        </div>
        <div className='flex flex-row mt-4 items-center'>
          <img src="/icons/boxes.svg" className='w-4 h-4 mr-3' />
          <span className='text-gray-500'>Rust / Go</span>
        </div>
      </div>
      <div className='border-t-[2.5px] border-gray-200 w-full mt-6 mb-4'></div>
      <button className='flex flex-row justify-center py-2 bg-[#FFB400]'>
        <div className='flex flex-row justify-between'>
          <span className='mr-5 font-semibold'>DOWNLOAD CV</span>
          <img src="/icons/download.svg" />
        </div>
      </button>
    </div>
  )
}

export default LeftSide