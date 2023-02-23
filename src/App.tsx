import { Wallet } from './wallet';
import { useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import { Trend } from './components/Trend';
import { Instructions } from './components/Instructions';

function App() {
    const scrollReveal = function() {
        const sections = document.querySelectorAll("[data-section]");
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.7) {
                sections[i].classList.add("active");
            } else {
                sections[i].classList.remove("active");
            }
        }
    }

    const addEventOnElem = function(elem: any, type: any, callback: any) {
        if (elem.length > 1) {
            for (let i = 0; i < elem.length; i++) {
                elem[i].addEventListener(type, callback);
            }
        } else {
            elem.addEventListener(type, callback);
        }
    }

    useEffect(() => {
        console.log("useEffect")
        scrollReveal();
        addEventOnElem(window, "scroll", scrollReveal);
    }, []);

    return (
        <Wallet>
            <>
                <Header />
                <main>
                    <article>
                        <Hero />
                        <Trend />
                        <Instructions />
                    </article>
                </main>
            </>
        </Wallet>
    )
}

export default App
