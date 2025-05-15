import React from 'react'
import FilterButton from './FilterButton'

const FilterView = () => {
  return (
    <div className='bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md 
    flex items-center justify-center gap-5 md:hidden px-xm py-ym lg:px-xlg lg:py-ylg'>
      <FilterButton text='all' />
      <FilterButton text='active' />
      <FilterButton text='completed' />
    </div>
  )
}

export default FilterView
