require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name return noise concert hunt force food genius'; 
let testAccounts = [
"0x4cabad6831a5c6bf8e7d4972e001e2603d589532ab5e68385089d26e9763e473",
"0xc0e6a37e867e9f97f6ee73625ab94ceb1dd7ba49890923c55dae8af59b41d658",
"0x29b480505f84f2eee4e9a56260871528d8b2ba76b11e1aedf4d318e26b8efbc5",
"0xaf6987c6ab850a24898bc7cce616260099f2aae4a1cde96ad272e08ee6f0839a",
"0x13a8daef86b349cf42b21a0a39326538731f47d4b96eb48791da3cfdadc5c418",
"0x77ea9aac7736133aa42568af470d299cc9925c5d7e0911c0b0ac8ab66f0d5116",
"0xbbf6cf90ec1d8b091eb4186c69cda6af2117eb01866ab28707b9d5f775964e8d",
"0x8d8b57820ee91d4103d1f0ad70ba5ce0c50f9d9c9fb2869b1a6007bbd226afc4",
"0xd54197d39dabedd9b33024cb61a2d47857204ac38089264496fea66b7066d780",
"0x47fe94ba0e3d99187631e9020ae40403c4ad2e315ed1edb9277c2c2ca8fcf554"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
