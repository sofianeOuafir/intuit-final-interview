"use client"; 

import PlayerList from './components/PlayerList';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';

async function fetchPlayers(page = 1, limit = 10) {
  try {
    const res = await axios.get(`http://localhost:3000/api/players`, {
      params: { page, limit }
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
}

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function loadPlayers(page) {
    const players = await fetchPlayers(page);

    setPlayers(players); // Adjust if your API response structure is different
    setTotalPages(1937); // Set based on your API response
  }

  // Load initial players on mount
  useEffect(() => {
    loadPlayers(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Player Cards</h1>
      <PlayerList players={players} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

