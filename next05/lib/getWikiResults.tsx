import React from 'react'

export default async function getWikiResults(searchTerm: string) {

    //taken from wiki API
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        prop: 'pageimage| extracts',
        gsrlimit: '20',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*'
        
    })
    
    const response = await fetch("https://www.mediawiki.org/w/api.php" + searchParams);

    return response.json()
}
