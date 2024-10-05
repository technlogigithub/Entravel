import { FC } from 'react'

interface ContainerProps{
    children: any;
    classNames?: string;
}

const Container: FC<ContainerProps> = ({ children, classNames }) => {
  return (
    <div className={`py-10 lg:py-12 2xl:py-16 text-black ${classNames ? classNames : ''}`}>
        {children}
    </div>
  )
}

export default Container
