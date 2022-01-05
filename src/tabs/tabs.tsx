import React, {useEffect, useState} from 'react';
import TabContent from './tab-content';
import {getTabsInfo} from '../api/api';
import TabName from './tab-name';
import {uniqueTitleOfArray} from '../helper/helper';
import Preloader from '../common/preloader';
import {RootDataOfResponseType, ListOfTabsType, TitlesType} from '../helper/types';

import s from './Tabs.module.css';

const Tabs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tabs, setTabs] = useState<ListOfTabsType>([]);
    const [tabList, setTabList] = useState<TitlesType[]>([]);
    const [activeId, setIsActiveId] = useState('');

    const onClick = (sectionId: string, id: string) => {
        setIsLoading(true);
        getTabsInfo(sectionId)
        .then(((data: RootDataOfResponseType)=> {
            const {response: {results}} = data;
            setTabs(results);
            setIsActiveId(id);
            setIsLoading(false);
        }))
        .catch(Error => {console.log(`${Error} Something is going wrong`)})
    }

    useEffect(() => {
        getTabsInfo()
        .then((data: RootDataOfResponseType) => {
            const {response: {results}} = data;
            setTabs(results);
            setIsActiveId(results[0].id);

            const newTabsList = uniqueTitleOfArray(results);
            setTabList(newTabsList);})
        .catch(Error => {console.log(`${Error} Something is going wrong`)})
    }, []);

    useEffect(() => {
        if (tabs && tabList) {
            setIsLoading(false)
        };
    }, [tabs, tabList]);

    return <div>
        <h1>Guardian clientside tabs challenge</h1>
        <div className={s.mainWrapper}>
            {
                activeId && <div className={s.tabsWrapper}>
                    {
                        tabList.map((item: TitlesType, num: number) => (
                            <TabName key={item.id} sectionId={item.sectionId} onClick={onClick} isActive={item.id === activeId} id={item.id}>
                                {item.sectionName}
                            </TabName>)
                        )
                    }
                </div>
            }
            {
            isLoading 
                ? <Preloader />
                : <div className={s.contentWrapper}>
                    <TabContent data={tabs} />
                </div>
            }
        </div> 
    </div>
}

export default Tabs;