require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "d9WzOyQE-eDn7asY5Zwp1CmFXS_QH5sW";
const ROPSTEN_PRIVATE_KEY =
  "dc63aaad7b9b396358331a9bad2fc11433d502e47f28c2e33cffe48c7c9e021c";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
