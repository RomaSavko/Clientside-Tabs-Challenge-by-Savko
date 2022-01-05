import React from 'react';
import {ListOfTabsType} from '../../helper/types';

import s from './TabContent.module.css';

type PropsType = {
    data: ListOfTabsType
}

const TabContent = (props: PropsType) => {

    const {data} = props;

    const newTabsInfo = data.map((item, num) => <div key={item.id} className={s.listItem}>
        <span>{num + 1}</span> <a href={item.webUrl}>{item.webTitle}</a>
    </div>);

    return <div className={s.tabPanelContainer}>
        <div id={s.tabPanel}>
            {newTabsInfo}
        </div>
    </div>
}

export default TabContent;