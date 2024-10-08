import Container from '../shared/Container'
import { Button } from '../ui/button'

const MemberClub = () => {
  return (
    <Container classNames='!pt-0 !pb-4 max-md:!mt-5'>
        <div className='flex mx-3 bg-white rounded-lg py-6 md:py-[72px] items-center gap-12 justify-center lg:justify-between max-lg:flex-wrap max-sm:overflow-hidden'>
            {/* Left Section */}
            <div className='flex items-center gap-4 xl:gap-10 max-lg:flex-wrap max-lg:justify-center'>
                <div className='flex gap-6 xl:gap-10 lg:flex-col max-sm:justify-center'>
                    <img src='/member/member_1.png' alt="Member"/>
                    <img src='/member/member_2.png' alt="Member"/>
                </div>
                <div className='flex gap-6 xl:gap-10 lg:flex-col max-sm:justify-center'>
                    <img src='/member/member_3.png' alt="Member"/>
                    <img src='/member/member_4.png' alt="Member"/>
                    <img src='/member/member_5.png' alt="Member"/>
                </div>
            </div>

            {/* Center Section */}
            <div className='lg:max-w-xl flex justify-center flex-col items-center text-center max-md:px-6 max-lg:px-12 max-md:overflow-hidden'>
                <h4 className='pb-6 max-md:text-[36px]'>Degen Cat Members’ Club NFT collection</h4>
                <p className='font-normal pb-8'>Elevate your travel experience with Entravel’s exclusive NFTs. By owning one, you'll gain access to premium rewards, such as increased booking discounts, enhanced affiliate program benefits, complimentary booking credits, entry to monthly giveaways, and much more. </p>
                <Button size="lg">Learn more</Button>
            </div>

            {/* Right Section */}
            <div className=' flex items-center gap-4 xl:gap-10 max-lg:flex-wrap max-lg:justify-center max-sm:overflow-hidden'>
                <div className='flex gap-6 xl:gap-10 lg:flex-col max-sm:justify-center'>
                    <img src='/member/member_6.jpg' alt="Member"/>
                    <img src='/member/member_7.png' alt="Member"/>
                    <img src='/member/member_8.png' alt="Member"/>
                </div>
                <div className='flex gap-6 xl:gap-10 lg:flex-col max-sm:justify-center'>
                    
                    <img src='/member/member_9.png' alt="Member"/>
                    <img src='/member/member_10.png' alt="Member"/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default MemberClub