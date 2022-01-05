import {ListOfTabsType, TitlesType} from './types';

export const uniqueTitleOfArray = (array: ListOfTabsType): TitlesType[] => {

    let newArray: Array<string> = [];
    let newAdditionalArray: TitlesType[] = [];

    for (let item of array) {
        if (!newArray.includes(item.sectionId)) {
            newAdditionalArray.push({
                    sectionId: item.sectionId, 
                    sectionName: item.sectionName, 
                    id: item.id
            });
            newArray.push(item.sectionId);
        }
    }

    return newAdditionalArray;
} 