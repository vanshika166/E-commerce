

const AdminNav = () => {
  return (
    <div className='w-full fixed z-10 flex p-2 justify-between items-center bg-[#EDEEE9] px-7'>
      <h1 className='titlename text-3xl font-medium'>HE & SHE</h1>

      <di className='flex items-center justify-center gap-x-2'>
        <div className='h-10 w-10 rounded-full flex items-center justify-center overflow-hidden bg-red-200'>
            <img src="/logo.png" alt="" className='h-full w-full object-cover'/>
        </div>
        <h1 className='text-md font-Satoshi'>Vanshika</h1>
      </di>
    </div>
  )
}

export default AdminNav
