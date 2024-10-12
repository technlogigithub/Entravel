import { IconCheckedCircle } from '@/components/iocns/Icons'
import ResetPassword from '@/components/SignInSignUp/ResetPassword'


const ResetPasswords = () => {
  return (
    <div className='flex flex-col max-sm:h-screen'>
    
       <div className='pt-8 sm:pt-12 pb-4 px-4 sm:px-16 max-sm:flex max-sm:justify-center'> <IconCheckedCircle /></div>
        <div className='flex items-center sm:w-[511px] mx-auto px-4 sm:px-0 py-8 sm:h-[calc(100vh_-_80px)] max-xlg:text-center max-sm:flex-grow'>
        <ResetPassword/>
    </div>
    </div>
  )
}

export default ResetPasswords