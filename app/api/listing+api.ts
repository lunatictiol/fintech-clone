const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  const url = new URL(request.url);
//   const limit = url.searchParams.get("limit") || 5;

//   const response = await fetch(
//     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
//     {
//       headers: {
//         "X-CMC_PRO_API_KEY": API_KEY!,
//       },
//     }
//   );

//   const res = await response.json();
//   return Response.json(res.data);
  return Response.json(data);
}

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    num_market_pairs: 10848,
    date_added: "2010-07-13T00:00:00.000Z",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    max_supply: 21000000,
    circulating_supply: 19645193,
    total_supply: 19645193,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-03-05T09:45:00.000Z",
    quote: {
      EUR: {
        price: 61172.17695743709,
        volume_24h: 69278106372.44798,
        volume_change_24h: 80.6251,
        percent_change_1h: -0.48405293,
        percent_change_24h: 1.68774533,
        percent_change_7d: 17.06519156,
        percent_change_30d: 54.71398276,
        percent_change_60d: 50.57066489,
        percent_change_90d: 51.40362093,
        market_cap: 1201739222559.0044,
        market_cap_dominance: 52.3011,
        fully_diluted_market_cap: 1284615716106.177,
        tvl: null,
        last_updated: "2024-03-05T09:45:04.000Z",
      },
    },
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    num_market_pairs: 8497,
    date_added: "2015-08-07T00:00:00.000Z",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "injective-ecosystem",
      "layer-1",
      "ftx-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 120127131.78995213,
    total_supply: 120127131.78995213,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-03-05T09:45:00.000Z",
    quote: {
      EUR: {
        price: 3397.272518256182,
        volume_24h: 28951505589.23718,
        volume_change_24h: 81.3652,
        percent_change_1h: -0.27798853,
        percent_change_24h: 4.42728608,
        percent_change_7d: 13.33097334,
        percent_change_30d: 60.35701006,
        percent_change_60d: 62.89696558,
        percent_change_90d: 61.68737585,
        market_cap: 408104603526.94293,
        market_cap_dominance: 17.7721,
        fully_diluted_market_cap: 408104603526.9387,
        tvl: null,
        last_updated: "2024-03-05T09:45:04.000Z",
      },
    },
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    slug: "tether",
    num_market_pairs: 76927,
    date_added: "2015-02-25T00:00:00.000Z",
    tags: [
      "payments",
      "stablecoin",
      "asset-backed-stablecoin",
      "avalanche-ecosystem",
      "solana-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "injective-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
    ],
    max_supply: null,
    circulating_supply: 100044694548.97124,
    total_supply: 103800078701.87814,
    platform: {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-03-05T09:44:00.000Z",
    quote: {
      EUR: {
        price: 0.9218759200172967,
        volume_24h: 127574629087.67787,
        volume_change_24h: 63.8698,
        percent_change_1h: -0.00975918,
        percent_change_24h: -0.0079453,
        percent_change_7d: 0.00805054,
        percent_change_30d: 0.09012731,
        percent_change_60d: -0.06996444,
        percent_change_90d: 0.05387782,
        market_cap: 92228794830.18228,
        market_cap_dominance: 4.0164,
        fully_diluted_market_cap: 95690793051.16272,
        tvl: null,
        last_updated: "2024-03-05T09:45:04.000Z",
      },
    },
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    slug: "bnb",
    num_market_pairs: 2081,
    date_added: "2017-07-25T00:00:00.000Z",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 149541397.38261488,
    total_supply: 149541397.38261488,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-03-05T09:44:00.000Z",
    quote: {
      EUR: {
        price: 385.90384494527785,
        volume_24h: 2341285560.455857,
        volume_change_24h: 39.8193,
        percent_change_1h: -0.02460092,
        percent_change_24h: -0.9529521,
        percent_change_7d: 4.99520205,
        percent_change_30d: 39.39965358,
        percent_change_60d: 30.52969375,
        percent_change_90d: 78.57628595,
        market_cap: 57708600228.44079,
        market_cap_dominance: 2.5115,
        fully_diluted_market_cap: 57708600228.44533,
        tvl: null,
        last_updated: "2024-03-05T09:45:04.000Z",
      },
    },
  },
  {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    slug: "solana",
    num_market_pairs: 631,
    date_added: "2020-04-10T00:00:00.000Z",
    tags: [
      "pos",
      "platform",
      "solana-ecosystem",
      "cms-holdings-portfolio",
      "kenetic-capital-portfolio",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "okex-blockdream-ventures-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
      "sec-security-token",
      "alleged-sec-securities",
    ],
    max_supply: null,
    circulating_supply: 442315505.4744836,
    total_supply: 571041563.3089167,
    infinite_supply: true,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-03-05T09:45:00.000Z",
    quote: {
      EUR: {
        price: 119.63987139843265,
        volume_24h: 4498107313.186403,
        volume_change_24h: 63.4076,
        percent_change_1h: -0.07141547,
        percent_change_24h: -2.70892074,
        percent_change_7d: 16.58951585,
        percent_change_30d: 33.46755042,
        percent_change_60d: 26.84646008,
        percent_change_90d: 97.93597163,
        market_cap: 52918570192.49995,
        market_cap_dominance: 2.3031,
        fully_diluted_market_cap: 68319339197.442345,
        tvl: null,
        last_updated: "2024-03-05T09:45:04.000Z",
      },
    },
  },
];