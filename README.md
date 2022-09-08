# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install

To install, download or clone the repo, then:

`npm install`

Move to contracts directory, install dependencies and compile contracts:

```
cd eth-contracts
npm install
truffle compile
``` 

## Tests

Start ganache and run tests:
```
npm run ganache
npm run test
```

To run individual tests:
```
truffle test ./test/TestERC721Mintable.js
truffle test ./test/TestSquareVerifier.js
truffle test ./test/TestSolnSquareVerifier.js
```

## ZoKrates Setup

Install and instantiate a Zokrates zkSnarks development environment using Docker. Completes the Zokrates proof in `square.code` by adding the variable names in `square.code`.

Preequisite: Install Docker using instructions from [here](https://docs.docker.com/install/).


```
# Run ZoKrates
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash

# Change path to code/square
cd code/square

# Compile the program
~/zokrates compile -i square.code

# Generate the Trusted Setup
~/zokrates setup

# Compute Witness
~/zokrates compute-witness -a 3 9

# Generate Proof
~/zokrates generate-proof

# Export Verifier
~/zokrates export-verifier
```

## Contracts Deployment on Rinkeby

Run the following command to deploy contracts on Rinkeby netwrok:
`npm run deployOnRinkeby`

Contract deployment information on Rinkeby netwrok:
```
https://rinkeby.etherscan.io/address/0xf804b6abc114669671c1479dfdf1338867bf3fac
https://rinkeby.etherscan.io/address/0x18a856d5e347641cfb3f7faa5aa68bc83342bfc5
https://rinkeby.etherscan.io/address/0x64a2d1708eba337289cfe4e15a1acac67260c8db

  

## Mint Tokens

1. Mint 10 Tokens
https://rinkeby.etherscan.io/tx/0x2bcce80e9939eee9110a697e601349a0ad649318352b531245e73e0ddae4e56a
https://rinkeby.etherscan.io/tx/0xafaedad151c30e806871634cfe6e0c4f09b1ad5ef91eb2d1e174e5bb7b08fe10
https://rinkeby.etherscan.io/tx/0x64cc57908996785045326cb343ecd8e63ec1f396af42e400179d3f573219669e
https://rinkeby.etherscan.io/tx/0x67e170c256ea361347326ce5cdedc9a3cbde04703b9cbe0960e900dfe97104e1
https://rinkeby.etherscan.io/tx/0xd327d82dfc5696e5bcca365fd37238c3cedd2f9232428d4e594461571623ceea
https://rinkeby.etherscan.io/tx/0xaca8e0941bdb73fc027b464bff9f4d03d8952de68324448de9d3d6c2363f5894
https://rinkeby.etherscan.io/tx/0xe14de680f9c66a4e52cbd40f7f538e0cb0d8c28c91271ac91476cb426dcaad4b
https://rinkeby.etherscan.io/tx/0xaef7cac3091cd7d5e89b63f303ef86ae1ec5db78b583695c8489c599d811017a
https://rinkeby.etherscan.io/tx/0x687c3a9fcd621fadc0f3246b1c0ac576184897160f5c6c61f93051d86c1c15d5
https://rinkeby.etherscan.io/tx/0x5dbd048f8969668373e1df1ce8472b92495d68ce99a22ad79043d371a8487e95

## Opensea Storefront
OpenSea Link : [https://rinkeby.opensea.io/assets/real-estate](https://rinkeby.opensea.io/assets/real-estate)

2. 1. Open Sea Listing:
https://testnets.opensea.io/assets/rinkeby/0xf804b6abc114669671c1479dfdf1338867bf3fac/1
https://testnets.opensea.io/assets/rinkeby/0xf804b6abc114669671c1479dfdf1338867bf3fac/2
https://testnets.opensea.io/assets/rinkeby/0xf804b6abc114669671c1479dfdf1338867bf3fac/3
https://testnets.opensea.io/assets/rinkeby/0xf804b6abc114669671c1479dfdf1338867bf3fac/4
https://testnets.opensea.io/assets/rinkeby/0xf804b6abc114669671c1479dfdf1338867bf3fac/5

2. Purchase those 5 tokens using a different address
https://rinkeby.etherscan.io/tx/0x8f605444bfa3b6dd678be821066574a87040512eca523eeaac2aa5ab5712e1cc
https://rinkeby.etherscan.io/tx/0x49d593dbeede6374e29a2f0456f8c507c230a4cc31927c251ed4bb9522e8cca4
https://rinkeby.etherscan.io/tx/0x96338736b3517e125d9b58a007ecd173d049a9cc052fe14c4149a9259718b035
https://rinkeby.etherscan.io/tx/0x86cf918d0b8b7e0aa9780f2f6144fdb5de8756736438a61531fe0ca9b5ddab20
https://rinkeby.etherscan.io/tx/0x843ac39a813d22e82fdc8fd4a5b216ac26e6e89136e59730384b7c9f1854ae56



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
