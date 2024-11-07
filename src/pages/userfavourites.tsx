
import Favourites from '@/components/UserAdmin/Favourites/Favourites'
import UserDetailsSidebar from '@/components/UserAdmin/UserDetailsSidebar'

const UserFavourites = () => {
  return (
    <div className="md:flex xl:gap-20 max-xlg:flex-wrap pt-16 md:pt-20 xlg:pt-32 pb-16 bg-innerBg min-h-[calc(100vh_-_266px)] px-6 md:px-10 2xlg:px-20">
        <UserDetailsSidebar/>
        <div className='basis-full xlg:basis-[calc(100%_-_176px)] xl:basis-[calc(100%_-_256px)]'>
        <Favourites/>
        </div>
    </div>
  )
}

export default UserFavourites