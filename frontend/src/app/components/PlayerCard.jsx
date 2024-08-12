import React from 'react';
import { format } from 'date-fns';

export default function PlayerCard({ player }) {
  const formattedDebut = format(new Date(player.debut), 'MMMM d, yyyy');

  return (
    <div className="player-card">
      <h2>{player.nameGiven}</h2>
      <p><strong>Height:</strong> {player.height} inches</p>
      <p><strong>Weight:</strong> {player.weight} lbs</p>
      <p><strong>Debut:</strong> {formattedDebut}</p>
      <p><strong>Location:</strong> {player.birthCity}, {player.birthState}</p>
    </div>
  );
}
