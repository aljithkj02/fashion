import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer id="contact" className="bg-black text-white py-10 px-6 text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Standard Fashion With Akshay</p>
            <div className="space-x-4">
                <a href="#" className="hover:text-gray-400">Instagram</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
                <a href="#" className="hover:text-gray-400">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
