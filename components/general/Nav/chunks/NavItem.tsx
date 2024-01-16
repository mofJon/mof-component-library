import { FC } from 'react';
import { Box, Button } from '@/components';
import { useRouter } from 'next/navigation';
import NavPanel from './NavPanel'
import { navItem, navItemWrapper } from '../Nav.styles'

const NavItem: FC<any> = ({ data, isActive = false, itemIcons, ...props }) => {
    const { navTitle, navLink, navItems } = data;
    const router = useRouter()

    const handleClick = () => {
        navLink && router.push(navLink)
    }

    const item = <Button text={navTitle} onClick={handleClick} variant="nav" iconPre={itemIcons?.iconPre} iconPost={itemIcons?.iconPost} {...navItem(isActive)} {...props} />

    console.log('items', navItems.length, navItems && navItems.length > 0)

    if (navItems && navItems.length > 0){
        return (
            <Box {...navItemWrapper}>
                {item}
                <NavPanel data={navItems} itemIcons={itemIcons} />
            </Box>
        )
    }

    return item
}

export default NavItem;