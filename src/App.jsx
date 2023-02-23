import { Wallet } from './wallet';
import { useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import { Trend } from './components/Trend';
import { Instructions } from './components/Instructions';

import { Chain, useAccount, useContract, useEnsName, useEnsResolver, useNetwork, useProvider } from 'wagmi'
import abi from "./abi.json";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

function useAnimations() {
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

    const addEventOnElem = function(elem, type, callback) {
        if (elem.length > 1) {
            for (let i = 0; i < elem.length; i++) {
                elem[i].addEventListener(type, callback);
            }
        } else {
            elem.addEventListener(type, callback);
        }
    }

    useEffect(() => {
        scrollReveal();
        addEventOnElem(window, "scroll", scrollReveal);
    }, []);
}

const isDev = import.meta.env.DEV

function App() {
    const queryClient = new QueryClient()

    const contract = useContract({
        address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        abi: abi,
    })

    useAnimations()

    return (
        <QueryClientProvider client={queryClient}>
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

        </QueryClientProvider>
    )
}

export default App
