import { sepolia } from 'wagmi/chains';

import { ChainId } from '@/types/ChainId';

export function getRpcUrl(chainId: number) {
  switch (chainId) {
    case sepolia.id:
      return sepolia.rpcUrls.default.http[0];

    case ChainId.ArbitrumSepolia:
      return 'https://sepolia-rollup.arbitrum.io/rpc';

    case ChainId.BaseSepolia:
      return 'https://sepolia.base.org';

    default:
      throw new Error(`[getRpcUrl] Unexpected chainId: ${chainId}`);
  }
}
