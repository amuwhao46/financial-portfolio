import { getStockQuote, searchStocks } from "@/api/stock";
import { useQuery } from "@tanstack/react-query";

export function useStockSearch(query: string) {
    return useQuery({
        queryKey: ['stock-search', query],
        queryFn: () => searchStocks(query),
        enabled: query.length > 0,
    })
}

export function useStockQuote(symbol: string) {
    return useQuery({
        queryKey: ['stock-quote', symbol],
        queryFn: () => getStockQuote(symbol),
        enabled: symbol.length > 0,
    })
}