import { useState } from 'react';
import { api } from '../utils/api';

export const useWheel = () => {
  const [wheel, setWheel] = useState({ segments: [] });
  const [history, setHistory] = useState([]);

  const spin = async () => {
    const result = wheel.segments[Math.floor(Math.random() * wheel.segments.length)];
    setHistory([...history, result]);
    // Play sound, trigger effects
    return result;
  };

  const customize = (newSegs) => setWheel({ ...wheel, segments: newSegs });

  return { wheel, spin, customize, history };
};
