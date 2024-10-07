import Container from '../shared/Container'
import { Button } from '../ui/button'

const MemberClub = () => {
  return (
    <Container classNames='!pt-0 !pb-4'>
        <div className='flex mx-3 bg-white rounded-lg py-[72px] items-center gap-12 justify-between'>
            {/* Left Section */}
            <div className='flex items-center gap-4 xl:gap-10'>
                <div className='flex gap-6 xl:gap-10 flex-col'>
                    <img src='/member/member_1.png' alt="Member"/>
                    <img src='/member/member_2.png' alt="Member"/>
                </div>
                <div className='flex gap-6 xl:gap-10 flex-col'>
                    <img src='/member/member_3.png' alt="Member"/>
                    <img src='/member/member_4.png' alt="Member"/>
                    <img src='/member/member_5.png' alt="Member"/>
                </div>
            </div>

            {/* Center Section */}
            <div className='max-w-xl flex justify-center flex-col items-center text-center'>
                <h4 className='pb-6'>Degen Cat Members’ Club NFT collection</h4>
                <p className='font-normal pb-8'>Elevate your travel experience with Entravel’s exclusive NFTs. By owning one, you'll gain access to premium rewards, such as increased booking discounts, enhanced affiliate program benefits, complimentary booking credits, entry to monthly giveaways, and much more. </p>
                <Button size="lg">Learn more</Button>
            </div>

            {/* Right Section */}
            <div className=' flex items-center gap-4 xl:gap-10'>
                <div className='flex gap-6 xl:gap-10 flex-col'>
                    <img src='/member/member_6.jpg' alt="Member"/>
                    <img src='/member/member_7.png' alt="Member"/>
                    <img src='/member/member_8.png' alt="Member"/>
                </div>
                <div className='flex gap-6 xl:gap-10 flex-col'>
                    
                    <img src='/member/member_9.png' alt="Member"/>
                    <img src='/member/member_10.png' alt="Member"/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default MemberClub