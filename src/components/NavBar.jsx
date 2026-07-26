import { useEffect, useState } from "react";
import { motion, spring } from "motion/react";
import {Menu, X, Search, ShoppingCart} from "lucide-react";

const NavItems = [
    {name: "Home", href: "#home"},
    {name: "Shop", href: "#shop"},
    {name: "About", href: "#about"},
    {name: "Reviews", href: "#reviews"} ,
    {name: "Contact", href: "#contact"}
];

export const NavBar = ({ openCart, cartCount, searchTerm, setSearchTerm, }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <motion.nav
            initial={{ y: -55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 1, ease: "linear"}}
           
            className={`fixed w-full font-sans z-50  ${
                isScrolled
                ? "py-3 bg-background/95 "
                : "py-5"
            }`}
            >

            <div className="container flex items-center justify-between">
                <a className="font-bold text-text2 bg-background sm:px-4 px-1 mr-4 rounded-2xl flex items-center" href="#home">
                    <span className="relative text-[16px] sm:text-[15px] z-10">
                        shanelle{" "}<span className="text-text md:text-[20px]">Crochet</span>
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {NavItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-text2 transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex flex-row gap-3">
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className={`
                            border rounded-2xl transition-all duration-300 overflow-hidden
                            w-25
                            md:w-40 px-3 py-1 opacity-100

                            ${
                            showSearch
                                ? "md:w-40 md:px-3 md:opacity-100"
                                : "md:w-0 md:px-0 md:opacity-0 md:border-transparent"
                            }
                        `}
                    />

                   <Search
                    onClick={() => {
                        setShowSearch((prev) => {
                        if (prev) {
                            setSearchTerm("");
                        }
                        return !prev;
                        });
                    }}
                    />
                    <div className="relative cursor-pointer" onClick={openCart}>
                        <ShoppingCart size={28} />

                        {cartCount > 0 && (
                            <span
                                className="absolute -top-2 -right-2
                                        bg-secondary text-white
                                        text-xs font-bold
                                        w-5 h-5
                                        rounded-full
                                        flex items-center justify-center"
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>

                </div>

                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>{isMenuOpen ? <X size={28} /> : <Menu size={24} />}</button>

                <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {NavItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>


            </div>

        </motion.nav>
    );
}