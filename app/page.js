import {Suspense} from "react";
import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Suspense fallback={<p>Loading</p>}>
                <Header/>
            </Suspense>
            <main className="min-h-screen">
                <h1>Homepage</h1>
            </main>
            <Footer/>
        </>
    );
}
