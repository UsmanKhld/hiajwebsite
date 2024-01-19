import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import '@styles/globals.css';

export const metadata = {
    title: "Heaven in a Jar",
    description: 'Heavenly Desserts in a Jar!'
}

const Rootlayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default Rootlayout