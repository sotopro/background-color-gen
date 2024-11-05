import React, { createContext, ReactNode, useContext, useState } from "react";

interface ColorHistoryContextType {
  colorHistory: string[];
  addColorToHistory: (color: string) => void;
}

const ColorHistoryContext = createContext<ColorHistoryContextType | undefined>(
  undefined
);

export const ColorHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const addColorToHistory = (color: string) => {
    setColorHistory((prevHistory) => [...prevHistory, color]);
  };

  return (
    <ColorHistoryContext.Provider value={{ colorHistory, addColorToHistory }}>
      {children}
    </ColorHistoryContext.Provider>
  );
};

export const useColorHistory = () => {
  const context = useContext(ColorHistoryContext);
  if (!context) {
    throw new Error(
      "useColorHistory must be used within a ColorHistoryProvider"
    );
  }
  return context;
};
