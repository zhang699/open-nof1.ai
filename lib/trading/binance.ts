import ccxt from "ccxt";

export const binance = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_API_SECRET,
  options: {
    defaultType: "future",
  },
  urls: {
    api: {
      fapiPublic: "https://demo-fapi.binance.com/fapi/v1",
      fapiPrivate: "https://demo-fapi.binance.com/fapi/v1",
      fapiPublicV2: "https://demo-fapi.binance.com/fapi/v2",
      fapiPrivateV2: "https://demo-fapi.binance.com/fapi/v2",
    },
  },
});