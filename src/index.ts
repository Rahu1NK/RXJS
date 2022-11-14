type Stocks = {
  symbol: string
  price: number
  volume: number
}
import { Observable, of } from "rxjs"

//forEach

// function getStockSymbols(stocks: Array<Stocks>) {
//   var symbols: Array<string> = []

//   stocks.forEach(function (stock: Stocks) {
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
// function getStockSymbols(stocks: Array<Stocks>) {
//   return stocks.map(function (stock: Stocks) {
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

// function getStocksOver(stocks: Array<Stocks>, minPrice: number) {
//   return stocks.filter(function (stock: Stocks) {
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
//   .filter(function (stock: Stocks) {
//     return stock.price >= 150.0
//   })
//   .map(function (stock: Stocks) {
//     return stock.symbol
//   })

// filteredStockSymbols.forEach(function (symbol) {
//   console.log(symbol)
// })

type Hero = {
  id: number
  name: string
}
const HEROS: Hero[] = [
  { id: 12, name: "Dr. Nice" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr. IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
]
const getHeroes = (): Observable<Hero[]> => {
  const heroes = of(HEROS)
  return heroes
}
var subcription = getHeroes().subscribe((heroes: Hero[]) =>
  heroes.map((hero) => {
    console.log(hero)
  })
)
subcription.unsubscribe()
