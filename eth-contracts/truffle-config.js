const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");
const MNEMONIC =
  "evolve female bubble spider dust again render proof home hurt outside city";
const ENDPOINT =
  "https://rinkeby.infura.io/v3/23a4d9e4ff294bfc8bf3e935729b0e22";

module.exports = {
  networks: {
    //
    // development: {
    //   host: "127.0.0.1", // Localhost (default: none)
    //   port: 8545, // Standard Ethereum port (default: none)
    //   network_id: "*", // Any network (default: none)
    // },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, ENDPOINT);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
