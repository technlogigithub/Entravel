
import Card from '../shared/Card'
import Container from '../shared/Container'
import { Badge } from '../ui/badge'

const EfforlessBooking = () => {
  return (
    <Container>
        <div className='grid grid-cols-2 items-end padding-48'>
            <h3>Effortless booking, <br/>
            exclusive savings</h3>
            <p className='text-black max-w-[507px] justify-self-end'>Enjoy unbeatable hotel booking deals with Entravel - where <span className='font-semibold'>invitation-only membership</span> unlocks a world of privileges.</p>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            <Card>
                <Badge>Best Prices</Badge>
            </Card>
        </div>
    </Container>
  )
}

export default EfforlessBooking