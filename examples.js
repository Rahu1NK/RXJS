//forEach

// function getStockSymbols(stocks>) {
//   var symbols: Array<string> = []

//   stocks.forEach(function (stock) {
//     symbols.push(stock.symbol)
//   })

//   return symbols
// }

// var symbols = getStockSymbols([
//   { symbol: "XFX", price: 240.22, volume: 23432 },
//   { symbol: "TNZ", price: 332.19, volume: 234 },
//   { symbol: "JXJ", price: 120.22, volume: 5323 }
// ])

// console.log(JSON.stringify(symbols))

//Map
// function getStockSymbols(stocks) {
//   return stocks.map(function (stock) {
//     return stock.symbol
//   })
// }

// var symbols = getStockSymbols([
//   { symbol: "XFX", price: 240.22, volume: 23432 },
//   { symbol: "TNZ", price: 332.19, volume: 234 },
//   { symbol: "JXJ", price: 120.22, volume: 5323 }
// ])

// console.log(JSON.stringify(symbols))

//Array Filter

// function getStocksOver(stocks, minPrice) {
//   return stocks.filter(function (stock) {
//     return stock.price >= minPrice
//   })
// }

// var expensiveStocks = getStocksOver(
//   [
//     { symbol: "XFX", price: 240.22, volume: 23432 },
//     { symbol: "TNZ", price: 332.19, volume: 234 },
//     { symbol: "JXJ", price: 120.22, volume: 5323 }
//   ],
//   150.0
// )

// console.log(JSON.stringify(expensiveStocks))

//Chainging Map and Filter
// var stocks = [
//   { symbol: "XFX", price: 240.22, volume: 23432 },
//   { symbol: "TNZ", price: 332.19, volume: 234 },
//   { symbol: "JXJ", price: 120.22, volume: 5323 }
// ]

// var filteredStockSymbols = stocks
//   .filter(function (stock) {
//     return stock.price >= 150.0
//   })
//   .map(function (stock) {
//     return stock.symbol
//   })

// filteredStockSymbols.forEach(function (symbol) {
//   console.log(symbol)
// })

//Advance Flattening
var exchanges = [
  {
    name: "NYSE",
    stocks: [
      {
        symbol: "XFX",
        closes: [
          { date: new Date(2014, 11, 24), price: 240.1 },
          { date: new Date(2014, 11, 23), price: 232.08 },
          { date: new Date(2014, 11, 22), price: 241.09 }
        ]
      },
      {
        symbol: "TNZ",
        closes: [
          { date: new Date(2014, 11, 24), price: 521.24 },
          { date: new Date(2014, 11, 23), price: 511.0 },
          { date: new Date(2014, 11, 22), price: 519.29 }
        ]
      }
    ]
  },
  {
    name: "TSX",
    stocks: [
      {
        symbol: "JXJ",
        closes: [
          { date: new Date(2014, 11, 24), price: 423.22 },
          { date: new Date(2014, 11, 23), price: 424.84 },
          { date: new Date(2014, 11, 22), price: 419.72 }
        ]
      },
      {
        symbol: "NYN",
        closes: [
          { date: new Date(2014, 11, 24), price: 16.82 },
          { date: new Date(2014, 11, 23), price: 16.12 },
          { date: new Date(2014, 11, 22), price: 15.77 }
        ]
      }
    ]
  }
]

Array.prototype.concatAll = function () {
  var results = []

  this.forEach(function (subArray) {
    subArray.forEach(function (item) {
      results.push(item)
    })
  })

  return results
}

var christmasEveCloses = exchanges
  .map(function (exchange) {
    return exchange.stocks
      .map(function (stock) {
        return stock.closes
          .filter(function (close) {
            return close.date.getMonth() === 11 && close.date.getDate() === 24
          })
          .map(function (close) {
            return {
              symbol: stock.symbol,
              price: close.price
            }
          })
      })
      .concatAll()
  })
  .concatAll()

christmasEveCloses.forEach(function (christmasEveClose) {
  console.log(christmasEveClose)
})
