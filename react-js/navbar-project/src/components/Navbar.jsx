import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-15 py-3 bg-yellow-500 text-white">
                <div>
                    <p className="font-bold text-2xl">
                        UNION<span className="text-blue-700">CORP.</span>
                    </p>
                    <p className="text-xs">FINANCE & CONSULTATION</p>
                </div>

                <div className="hidden lg:flex justify-between list-none gap-10">
                    <li className="text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">About</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">Services</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">Work</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">Pricing</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">Blog</li>
                    <li className="hover:text-blue-500 transition duration-500 cursor-pointer">Contact</li>
                </div>
                <div className="lg:hidden">
                    {show ? (
                        <RxCross2
                            className="text-4xl font-bold cursor-pointer"
                            onClick={() => setShow(false)}
                        />
                    ) : (
                        <RxHamburgerMenu
                            className="text-4xl font-bold cursor-pointer"
                            onClick={() => setShow(true)}
                        />
                    )}
                </div>
            </div>

            <div
                className={`fixed top-18 right-0 w-75 bg-black text-white list-none p-3 text-center transform transition-transform duration-500 ease-in-out z-50 ${show ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <li className="text-blue-500 py-3 cursor-pointer">Home</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">About</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">Services</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">Work</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">Pricing</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">Blog</li>
                <li className="py-3 hover:text-blue-500 transition duration-500 cursor-pointer">Contact</li>
            </div>
        </>
    );
};

export default Navbar;
