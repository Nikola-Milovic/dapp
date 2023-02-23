import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20ABI } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
 
console.log(process.env.ETHERSCAN_API_KEY)

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'Wagmipet',
      abi: erc20ABI,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'EnsRegistry',
          address: {
            [mainnet.id]: '0x314159265dd8dbb310642f98f50c066173c1259b',
            [goerli.id]: '0xeCB504D39723b0be0e3a9Aa33D646642D1051EE1',
          },
        },
      ],
    }),
    react(),
  ],
})
