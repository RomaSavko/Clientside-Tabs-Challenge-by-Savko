import React from 'react';
import s from '../Tabs.module.css';

type PropsType = {
    sectionId: string
    children: React.ReactNode
    onClick: (sectionId: string, id: string) => void 
    isActive: boolean 
    id: string
}

const TabName = (props: PropsType) => {
    const {sectionId, children, onClick, isActive, id} = props;

    const tabsClass: string = isActive ? `${s.tab} ${s.activeTab}` : s.tab;

    const onClickTab = (): void => {
        onClick(sectionId, id);
    }

    return <div className={tabsClass} onClick={onClickTab}>{children}</div>
}

export default TabName;