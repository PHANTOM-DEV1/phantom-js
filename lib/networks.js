module.exports = {
  phantom: {
    messagePrefix: '\x18Phantom Signed Message:\n',
    bip32: {
      public: 0x43587CF      , // base58 will have a prefix 'apub'
      private: 0x4358394 // base58Priv will have a prefix 'apriv'
    },
    pubKeyHash: 0x37, // Addresses will begin with 'A'
    wif: 0xaa // Network prefix for wif generation
  },
  testnet: {
    messagePrefix: '\x18Phantom Signed Message:\n',
    bip32: {
      public: 0x43587CF      , // base58 will have a prefix 'apub'
      private: 0x4358394 // base58Priv will have a prefix 'apriv'
    },
    pubKeyHash: 0x37, // Addresses will begin with 'A'
    wif: 0xaa // Network prefix for wif generation
  },
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  },
phantomTestnet: {
  messagePrefix: '\x18Phantom Signed Message:\n',
  bip32: {
    public: 0x43587CF      , // base58 will have a prefix 'apub'
    private: 0x4358394 // base58Priv will have a prefix 'apriv'
  },
  pubKeyHash: 0x37, // Addresses will begin with 'A'
  wif: 0xaa // Network prefix for wif generation
}
}