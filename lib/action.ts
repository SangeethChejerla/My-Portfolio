import axios from 'axios';

interface Quote {
  content: string;
  author: string;
  tags: { _id: string; name: string }[];
}

export async function fetchRandomQuote(): Promise<Quote> {
  const response = await axios.get('https://api.quotable.io/random');
  return response.data;
}