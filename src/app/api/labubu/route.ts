import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = process.env.LABUBU_API_URL;
  const API_KEY = process.env.LABUBU_API_KEY;

  console.log("ROUTE: ", API_URL, API_KEY);

  try {
    const response = await fetchWithRetry(`${API_URL}/leaderboard`, {
      headers: {
        'X-API-KEY': API_KEY || '',
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
    }, 3);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from backend' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Labubu API proxy error: ", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = 3,
  backoff: number = 2000
): Promise<Response> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {    // Response error, retrying
      throw new Error(`Server responded with status: ${res.status}`);
    }

    return res;
  } catch (err) {
    if (retries <= 0) {   // Max attempts reached
      console.error("All retry attempts failed.");
      throw err;
    }

    console.log(`Connection failed. Waking up server... (${retries} attempts left)`);

    await new Promise(resolve => setTimeout(resolve, backoff));   // Give server some time to wake up

    return fetchWithRetry(url, options, retries - 1, backoff * 1.5);    // Call again
  }
}