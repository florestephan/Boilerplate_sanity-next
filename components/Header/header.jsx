import {sanityFetch} from "@/sanity/lib/client";

export async function Header() {

    const header = await sanityFetch({
        query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        tags: ['homepage']
    })
    
    return (
        <header>
            <h2>{header?.titrehero}</h2>
        </header>
    )
}