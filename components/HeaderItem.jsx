function HeaderItem({title, Icon}) {
  return (
    <div className='flex flex-col items-center cursor-poiner group w-12 sm:w-20 hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest hover:text-white'>{title}</p>
    </div>
  )
}

export default HeaderItem