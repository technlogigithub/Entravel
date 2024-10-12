
import SignInLeftPanel from '@/components/SignInSignUp/SignInLeftPanel'
import SignUp from '@/components/SignInSignUp/SignUp'

const CreateAccount = () => {
  return (
    <div className='grid grid-cols-1 xlg:grid-cols-2 gap-8 xlg:gap-32 flex-wrap max-w-[1140px] mx-auto items-center justify-center py-10 px-4 sm:p-8 xlg:h-screen max-xlg:text-center max-xlg:max-w-2xl'>
    <SignInLeftPanel/>
    <SignUp/>
</div>
  )
}

export default CreateAccount