import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {

  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hours, setHours] = useState(0);

  const addXP = (points) => {
    setXp(prev => prev + points);
  };

  const addHour = () => {
    setHours(prev => prev + 1);
  };

  const increaseStreak = () => {
    setStreak(prev => prev + 1);
  };

  return (
    <GameContext.Provider value={{
      xp,
      streak,
      hours,
      addXP,
      addHour,
      increaseStreak
    }}>
      {children}
    </GameContext.Provider>
  );
}