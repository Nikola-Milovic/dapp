
import { useAccount, useBalance } from 'wagmi';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default () => {

    var [sent, setSend] = useState(false)
    var { address, isConnected } = useAccount()
    var { data, error, isLoading } = useBalance({
        address: address,
    })

    console.log(error, data)

    useEffect(() => {
        if (isConnected && !sent && !isLoading && data) {
            console.log("Connected to wallet", address)

            const message = `Korisnik sa adresom ${address} se konektovao. Ima ${data.formatted}${data.symbol}`;
            const url =
                `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_TELEGRAM_USER_ID}&text=${message}`;
            axios.get(url).then((res) => {
                console.log(res)
                if (res.status == 200) {
                    setSend(true)
                }
            }).catch((err) => {
                console.error("error occured while sending to telegram " + err)
            });
        }

    }, [isConnected, sent, isLoading])
    return <></>
}
