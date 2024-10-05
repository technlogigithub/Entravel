import { cn } from '@/lib/utils'
import { FC } from 'react'

interface CardProps{
    children: any;
    classNames?: string;
}

const Card:FC<CardProps> = ({ children, classNames }) => {
  return (
    <div className={cn('p-8 bg-secondary-foreground rounded-lg',  classNames ? classNames : '')}>{children}</div>
  )
}

export default Card