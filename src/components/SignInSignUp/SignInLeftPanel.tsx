import { IconCheckedCircle } from "../iocns/Icons"

const SignInLeftPanel = () => {
  return (
    <div className="flex flex-col max-xlg:items-center">
        <IconCheckedCircle />
        <h6 className="text-xl xlg:text-[28px] font-medium text-black-light leading-normal xlg:leading-10 mt-12 xlg:mt-16">Welcome to a world where you get exclusive access to the best hotels at the lowest possible prices.</h6>
        <ul className="mt-8 xlg:mt-20">
            <li className="flex gap-5 items-center mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center rounded-full bg-white card-shadow"><img src="/icons/million_property.png" alt="million" className="max-sm:w-4"/></div>
                <p className="font-medium">More than 1 million properties</p>
            </li>
            <li className="flex gap-5 items-center mb-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center rounded-full bg-white card-shadow"><img src="/icons/Travel_with.png" alt="Travel_with" className="max-sm:w-4"/></div>
                <p className="font-medium">Exclusive discounts only for our members</p>
            </li>
            <li className="flex gap-5 items-center">
                <div className="w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center rounded-full bg-white card-shadow"><img src="/icons/crypto_money.png" alt="crypto_money" className="max-sm:w-4" /></div>
                <p className="font-medium">Book and pay directly with crypto</p>
            </li>
        </ul>
    </div>
  )
}

export default SignInLeftPanel