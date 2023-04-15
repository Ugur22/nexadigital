import Footer from './organisms/Footer';
import Navigation from "./organisms/Navigation";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}