import ConfirmBooking from "@/components/Checkout/ConfirmBooking"
import { useState } from "react"


const BookingConfirmation = () => {
  const [isBookingConfirm, setIsBookingConfirm] = useState(false)
  const handleFinishPayment = () => {
    setIsBookingConfirm(!isBookingConfirm)
  }
  return (
    <div className="pt-16 md:pt-20 bg-innerBg min-h-[calc(100vh_-_266px)]"><ConfirmBooking isBookingConfirm={isBookingConfirm} onFinishPayment={handleFinishPayment} /></div>
  )
}

export default BookingConfirmation