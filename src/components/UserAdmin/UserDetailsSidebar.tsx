import { Link } from 'react-router-dom'

const UserDetailsSidebar = () => {
  return (
    <div className='basis-full xlg:basis-44 xl:basis-64 flex-shrink-0 max-xlg:w-full px-3 max-xlg:hidden'>

          <Link to="/user-booking-details" className="block pb-7 text-black-secondary">Bookings</Link>
          <Link to="/user-favourites" className="block pb-7 text-black-secondary">Favourites</Link>
          <Link to="/user-wallet-balance" className="block pb-7 text-black-secondary">Wallet balance</Link>
          <Link to="/user-personal-information" className="block pb-7 text-black-secondary">Personal information</Link>
          <Link to="/user-account-settings" className="block pb-7 text-black-secondary">Account settings</Link>
         
        </div>
  )
}

export default UserDetailsSidebar