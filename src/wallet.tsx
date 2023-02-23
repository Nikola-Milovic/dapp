import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";
import { PropsWithChildren } from "react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { mainnet, goerli } from "wagmi/chains";

const chains = [goerli, mainnet];

const projectID = import.meta.env.PROJECT_ID
const appName = import.meta.env.APP_NAME

const walletVersion = import.meta.env.WALLET_VERSION ?? "1"

console.log(projectID)

// Wagmi client
const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: projectID }),
]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
        projectId: projectID,
        version: walletVersion,
        appName: appName,
        chains,
    }),
    provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export const Wallet = ({ children }: PropsWithChildren) => {
    return (
        <>
            <WagmiConfig client={wagmiClient}>
                {children}
            </WagmiConfig>

            <Web3Modal
                projectId={projectID}
                ethereumClient={ethereumClient}
            />
        </>
    );
}
