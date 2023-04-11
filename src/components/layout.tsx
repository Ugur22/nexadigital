
import FooterSection from './FooterSection';
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <FooterSection />
        </>
    )
}