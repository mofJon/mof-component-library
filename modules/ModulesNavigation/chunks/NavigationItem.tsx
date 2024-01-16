import { FC } from 'react';
import { Button } from '@/components';
import { useRouter } from 'next/navigation';
import { navItem } from '../ModulesNavigation.styles'

const NavigationItem: FC<any> = ({ arrow, variant = "nav", link, isActive = false }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(link.href)
    }

    return(
        <Button text={link.text} onClick={handleClick} variant={variant} iconPost={arrow} {...navItem(isActive)} />
    )
}

export default NavigationItem;