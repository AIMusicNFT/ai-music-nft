/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "arbitrum_goerli",
  networks: {
    hardhat: {},
    arbitrum_goerli: {
      chainId: 421613,
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon/3cbfaa1b7c5676decf70e9f1c2ae93516adab0601259e96153f85c4f94215e45",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygonMumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai/3cbfaa1b7c5676decf70e9f1c2ae93516adab0601259e96153f85c4f94215e45",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
