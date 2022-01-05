import axios from 'axios';

export const getTabsInfo = async (sectionId: any = '') => {
    const {data} = await axios.get(`https://content.guardianapis.com/search?q=${sectionId}&api-key=test`);
    console.log(data);
    return data
};