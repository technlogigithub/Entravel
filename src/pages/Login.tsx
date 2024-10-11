import SignIn from '@/components/SignInSignUp/SignIn'
import SignInLeftPanel from '@/components/SignInSignUp/SignInLeftPanel'

const Login = () => {
  return (
    <div className='grid grid-cols-2 gap-32 flex-wrap max-w-[1140px] mx-auto items-center justify-center p-8 h-screen'>
        <SignInLeftPanel/>
        <SignIn/>
    </div>
  )
}

export default Login