import React, { useState } from 'react';
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
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data, error } = useSWR(searchTerm, fetcher);

  const renderData = () => {
    if (!searchTerm) {
      return <h1>Enter a search term...</h1>
    }

    if (error || !data || (data && data.error)) {
      return <h1>Error!</h1>
    }

    if (!data.items) {
      return <h1>No results</h1>
    }

    return data.items.map((item, i) => {
      return (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <h1>{item.title}</h1>
          <a href={item.link} style={{ fontSize: 16 }}>{item.link}</a>
        </div>
      )
    });
  }

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h1 style={{ paddingTop: 16, paddingBottom: 16 }}>
        Search for health updates in your area
      </h1>

      <input
        name='search'
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ fontSize: 24 }}
      />

      <button
        onClick={() => setSearchTerm(search)}
        style={{ fontSize: 24, marginTop: 16 }}
      >
        Search
      </button>

      {renderData()}
    </div>
  )
}

export default HomePage;
