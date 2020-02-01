import React from 'react';
import fetch from 'isomorphic-fetch';
import useSWR from 'swr';
import queryString from 'query-string';

const BASE_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1?';

const fetcher = async (search) => {
  const query = queryString.stringify({
    key: process.env.googleAPIKey,
    cx: process.env.googleSearchCX,
    q: search
  });

  const res = await fetch(BASE_SEARCH_URL + query);
  const json = await res.json();

  return json;
}

const HomePage = () => {
  const { data, error } = useSWR('coronavirus', fetcher);

  if (error || (data && data.error)) {
    return <h1>Error!</h1>
  }

  return <h1>It worked!</h1>;
}

export default HomePage;
