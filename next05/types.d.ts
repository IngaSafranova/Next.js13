type Result = {
    pageid: string,
    title: string,
    extract: string,
    //? - means optional
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

// searchResult query is optional as we cannot guaranty that we will get results back.
type SearchResult = {
    query?: {
        pages?: Result[],
    },
}