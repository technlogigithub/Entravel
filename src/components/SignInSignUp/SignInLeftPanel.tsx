import { IconCheckedCircle } from "../iocns/Icons"

const SignInLeftPanel = () => {
  return (
    <div>
        <IconCheckedCircle />
        <h6 className="text-[28px] font-medium text-black-light leading-10 mt-16">Welcome to a world where you get exclusive access to the best hotels at the lowest possible prices.</h6>
        <ul className="mt-20">
            <li className="flex gap-5 items-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white card-shadow"><img src="/icons/million_property.png" alt="million" /></div>
                <p className="font-medium">More than 1 million properties</p>
            </li>
        </ul>
    </div>
  )
}

export default SignInLeftPanel