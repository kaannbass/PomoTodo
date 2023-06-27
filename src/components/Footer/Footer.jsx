import { Link } from "react-router-dom";
import Spotfy from "../Spotfy";
const Footer = () => {
    return (
        <>
            <div className=" bottom-0 fixed min-w-full text-center ">
                <Spotfy></Spotfy>
                <footer className="lg:flex inline-block ">
                    <div className="w-full mx-auto max-w-screen-xl">
                        <span className="text-sm text-gray-900">© 2023 <Link to="https://github.com/kaannbass" className="hover:underline">Kaan™</Link>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;