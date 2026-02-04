import type { StockSearchResponse } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export async function searchStocks(query: string): Promise<StockSearchResponse> {
    const response = await fetch(`${API_BASE_URL}/api/stock/search?q=${query}`)
    
    if (!response.ok) {
        throw new Error('Failed to search stocks')
      }
      
      return response.json()
}

export async function getStockQuote(symbol: string): Promise<StockSearchResponse> {
    const response = await fetch(`${API_BASE_URL}/api/stock/quote/${symbol}`)
    
    if (!response.ok) {
        throw new Error('Failed to search stocks')
      }
      
      return response.json()
}