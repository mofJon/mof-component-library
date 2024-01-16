import { FC } from 'react';
import { Stack } from '@/components';
import NavItem from './NavPanel'
import { navPanel } from '../Nav.styles'

const NavPanel: FC<any> = ({ data, itemIcons, isActive = true, ...props }) => {

    if(!Array.isArray(data)) return null;

    const renderItems = data.map((val: any, i: number) => {
        return <NavItem key={`subNav${i}`} data={val} {...itemIcons} />
    })

    return(
        <Stack {...navPanel(isActive)}>
            {renderItems}
        </Stack>
    )
}

export default NavPanel;