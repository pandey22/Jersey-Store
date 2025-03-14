import { useState } from 'react'
import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer'>FILTERS 
          <img className={` ml-2 h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':"hidden"} sm:block` }>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Kids'} />Kids
            </p>
          </div>
        </div>
         {/* Sub category Filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':"hidden"} sm:block` }>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
                <input className='w-3'type="checkbox" value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side  */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={' COLLECTIONS'}/>
          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
          <option value="Relevant">Sort By : Relevant</option>
          <option value="Low-High">Sort By : High-Low</option>
          <option value="High-Low">Sort By : Low-High</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Collection
