import React from 'react';
import fetch from 'isomorphic-fetch';
import useSWR from 'swr';
import queryString from 'query-string';

const fetcher = async (search) => {
  const query = queryString.stringify({
    key: process.env.googleAPIKey,
    q: search
  });

  const res = await fetch('https://www.googleapis.com/customsearch/v1?' + query);
  const json = await res.json();

  return json;
}

const HomePage = () => {
  const { data, error } = useSWR('coronavirus', fetcher);

  console.log({ data, error });

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
