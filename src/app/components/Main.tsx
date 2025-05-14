import React from 'react'
import ThemeButton from './ThemeButton'
import TodoInput from './TodoInput'
import TodoListView from './TodoListView'

const Main = () => {
  return (
    <div className='bg-ml xs:bg-dl dark:bg-md dark:xs:bg-dd bg-no-repeat px-4 xs:px-6 py-12 font-jose
    flex flex-col gap-5'>
      <section className='flex justify-between items-center'>
        <p className='text-very-light-gray text-2xl font-semibold tracking-[0.2em]'>TODO</p>
        <ThemeButton />
      </section>
      <section className='flex flex-col gap-4'>
        <TodoInput />
        <TodoListView />
      </section>
    </div>
  )
}

export default Main
