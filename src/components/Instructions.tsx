import instruction1 from "../assets/images/instruction-1.png"
import instruction2 from "../assets/images/instruction-2.png"
import instruction3 from "../assets/images/instruction-3.png"
import instruction4 from "../assets/images/instruction-4.png"


export const Instructions = () => {

    return (
        <section className="section instruction" aria-label="instruction" data-section>
            <div className="container">

                <h2 className="h2 section-title">How It Work</h2>

                <p className="section-text">
                    Stacks is a production-ready library of stackable content blocks built in React Native.
                </p>

                <ul className="instruction-list">

                    <li>
                        <div className="instruction-card">

                            <figure className="card-banner">
                                <img src={instruction1} width="96" height="96" loading="lazy" alt="Step 1"
                                    className="img" />
                            </figure>

                            <p className="card-subtitle">Step 1</p>

                            <h3 className="h3 card-title">Download</h3>

                            <p className="card-text">
                                Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="instruction-card">

                            <figure className="card-banner">
                                <img src={instruction2} width="96" height="96" loading="lazy" alt="Step 2"
                                    className="img" />
                            </figure>

                            <p className="card-subtitle">Step 2</p>

                            <h3 className="h3 card-title">Connect Wallet</h3>

                            <p className="card-text">
                                Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="instruction-card">

                            <figure className="card-banner">
                                <img src={instruction3} width="96" height="96" loading="lazy" alt="Step 3"
                                    className="img" />
                            </figure>

                            <p className="card-subtitle">Step 3</p>

                            <h3 className="h3 card-title">Start Trading</h3>

                            <p className="card-text">
                                Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="instruction-card">

                            <figure className="card-banner">
                                <img src={instruction4} width="96" height="96" loading="lazy" alt="Step 4"
                                    className="img" />
                            </figure>

                            <p className="card-subtitle">Step 4</p>

                            <h3 className="h3 card-title">Earn Money</h3>

                            <p className="card-text">
                                Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                            </p>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )

}
