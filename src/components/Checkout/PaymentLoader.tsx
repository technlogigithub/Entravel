
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const PaymentLoader = () => {
  const navigate = useNavigate()
  const handleRedirectConfirmation = () => {
    navigate('/booking-confirmation')
  }
  return (
    <div className='flex flex-col gap-5 py-12 items-center max-w-xl mx-auto text-center max-lg:px-6'>
    <div className="flex items-center justify-center mb-6">
      <div className="loader">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
     
    </div>
     <p className='text-base max-md:font-normal text-black'>Your booking is still being processed. <br/>
      This may take a few minutes, please do not close the page.</p>
      <p className='text-base max-md:font-normal text-black'>If you need any assistance, our support team is here to help.</p>
      <Button variant="link" className='text-base' onClick={handleRedirectConfirmation}>Contact support</Button>
      </div>
  )
}

export default PaymentLoader