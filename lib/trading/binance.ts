import ccxt from "ccxt";

const isDemoTrading = process.env.BINANCE_USE_SANDBOX === "true";

export const binance = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_API_SECRET,
  options: {
    defaultType: "future",
    ...(isDemoTrading && {
      urls: {
        fapiPublic: "https://demo-fapi.binance.com/fapi/v1",
        fapiPrivate: "https://demo-fapi.binance.com/fapi/v1",
        fapiPublicV2: "https://demo-fapi.binance.com/fapi/v2",
        fapiPrivateV2: "https://demo-fapi.binance.com/fapi/v2",
        fapiPublicV3: "https://demo-fapi.binance.com/fapi/v3",
        fapiPrivateV3: "https://demo-fapi.binance.com/fapi/v3",
      },
    }),
  },
});