// ./src/app/home/layout.js
// import { sanityFetch } from '@/src/utils/sanity/client'

import {sanityFetch} from "@/sanity/lib/client";

export async function HomeLayout({children}) {
    // revalidate if there are changes to either the home document or to a page document (since they're referenced to in navItems)

    const home = await sanityFetch({
        query: `*[_id == "home"][0]{...,navItems[]->}`,
        tags: ['home', 'page']
    });

    return (
        <main>
            <nav>
                <span>{home?.title}</span>
                <ul>
                    {home?.navItems.map(navItem => (
                        <li key={navItem._id}><a href={navItem?.slug?.current}>{navItem?.title}</a></li>
                    ))}
                </ul>
            </nav>
            {children}
        </main>
    );
}
