require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace person bone tooth figure render remember company harvest battle frame gauge'; 
let testAccounts = [
"0x76287757d2fb9aee5bffcdfaa5558ef50d7aa4a7708c800d2370ad81df20f455",
"0xcad13246e7e871e1c71c5d65b5c3c215cb9b1331998174ddb00cbcdde0bcb569",
"0x75dab8566feaa17bef82aa0c357c8c4db3e254c5643bf1e95f7f67da8f79ae8e",
"0x396dfeda9af70c1c22a9ab0ded6a7318abe71c973fa5b8efc736b2bb54c02cad",
"0x2d4d8907f700ed4fa217a51628839c4fe7c05b29f923537b790e1ff70001d909",
"0x2b7eed87fd4c1aaea8cee8be3b27a4e94a37ef444ba5222e57cd536475091a3c",
"0xdecde0d7f5b736d99437efb976a38025f15b874330961c47e97abb38c320574e",
"0x5fc134c2f5582b3890f51c3f8c6ebff53dbe49fce4bab600d8bffd1c08a6c785",
"0xfba79e2aed2b69e744677870dd6a23d3969a460d42f95f0a457adee1847f6301",
"0x1ab94823bd249b380cb67bc368826618d6d7f47ab5bac983dd318d48092b8c79"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


