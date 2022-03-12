require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  solidity: '0.8.8',
  networks: {
        // for Optimism mainnet
    'optimism': {
      url: "https://mainnet.optimism.io",
      accounts: [process.env.PRIVATE_KEY],
    },
    // for Optimism testnet
    'optimism-kovan': {
      url: "https://kovan.optimism.io",
      accounts: [process.env.PRIVATE_KEY],
    },
    // Rinkeby Testnet
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    // Ethereum Mainnet
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};