import React from 'react'

function ProductCard() {
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#3e7ce1] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
              Add to card
              </button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
              Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#3585cf] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#348fd9] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#39a9d5] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCard