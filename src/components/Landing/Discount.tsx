import React from 'react'
import { Button } from '../ui/button'

const Discount = () => {
  return (
    <div className="bg-disocunt-bg w-[calc(100%_-_24px)] h-[700px] xl:h-[524px] bg-center bg-cover bg-no-repeat relative flex items-center mx-3 p-20">
            <div className='max-w-[660px]'>
            <h3 className='text-5xl font-semibold pb-6'>Save up to 70% and pay directly with USDT or USDC</h3>
            <p className='pb-8 max-w-[460px]'>Leverage your travel funds with Entravel and save up to 70% when you pay with USDT or USDC. These significant discounts are curated for our members only.</p>
            <Button variant="secondary" size="lg" className='inline-flex uppercase min-w-44'>Sign in</Button>
            </div>
    </div>
  )
}

export default Discount