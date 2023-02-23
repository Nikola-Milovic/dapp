
import { useState, useEffect } from 'react';
import logoUrll from "../assets/images/logo.svg"
import { Web3Button } from "@web3modal/react";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("[data-header]");
            if (window.scrollY > 300) {
                header?.classList.add("active");
            } else {
                header?.classList.remove("active");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header" data-header>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logoUrll} width="32" height="32" alt="Cryptex logo" />
                    Cryptex
                </a>

                <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className="navbar-link active" data-nav-link onClick={closeNav}>
                                Homepage
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>
                                Buy Crypto
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>
                                Markets
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>
                                Sell Crypto
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>
                                Blog
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>
                                BITUSDT
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className={`nav-toggle-btn ${isNavOpen ? "active" : ""}`} aria-label="Toggle menu" data-nav-toggler onClick={toggleNav}>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <Web3Button />
                {/* <a href="#" className="btn btn-outline" onClick={closeNav}> */}
                {/*   Wallet */}
                {/* </a> */}
            </div>
        </header>
    );
};

export default Header;
