import { Chain, useAccount, useContractRead, useEnsName, useEnsResolver, useNetwork, useProvider } from 'wagmi'
import bannerURL from "../assets/images/hero-banner.png";
 
const Hero = () => {

    const { data, isError, error,isLoading } = useContractRead({
        address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
        abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caretaker","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CaretakerLoved","type":"event"},{"inputs":[],"name":"clean","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAlive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoredom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHunger","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSleepiness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUncleanliness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"love","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sleep","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'getHunger',
    })

    console.log(data, error, isLoading)

  return (
    <section className="section hero" aria-label="hero" data-section>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Buy & Sell Digital Assets In The Cryptex
          </h1>
          <p className="hero-text">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </p>
          <a href="#" className="btn btn-primary">
            Get started now
          </a>
        </div>
        <figure className="hero-banner">
          <img
            src={bannerURL}
            width="570"
            height="448"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
