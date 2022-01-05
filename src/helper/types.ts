export type ListOfTabsType = TabsDataType[];

export type ResponseType = {
    status: string
    userTier: string
    total: number
    startIndex: number
    pageSize: number
    currentPage: number
    pages: number
    orderBy: string
    results: ListOfTabsType 
}

export type TabsDataType = {
    id: string
    type: string
    sectionId: string
    sectionName: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
    apiUrl: string
    isHosted:false
    pillarId: string
    pillarName: string
}

export type RootDataOfResponseType = {
    response: ResponseType
}

export type TitlesType = {
    sectionId: string
    sectionName: string
    id: string
}