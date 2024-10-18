import React, { useState, useCallback, useRef } from 'react';

export const colors = [
  { bg: '#15496A', text: '#F0CBF0' },
  { bg: '#fa2a59', text: '#fdecbb' },
  { bg: '#0c3d48', text: '#a4bf9d' },
];

interface TypeEffectProps {
  colorIndex: number;
  onColorChange: (newIndex: number) => void;
}

function TypeEffect({ colorIndex, onColorChange }: TypeEffectProps) {
  const currentTextIndex = useRef(0);

  const changeColor = useCallback(() => {
    const newIndex = (colorIndex + 1) % colors.length;
    console.log("Color index changed to:", newIndex);
    onColorChange(newIndex);
  }, [colorIndex, onColorChange]);

  const displayTextRenderer = useCallback((text: React.ReactNode, i: number) => {
    if (i !== currentTextIndex.current) {
      currentTextIndex.current = i;
      changeColor();
    }
    return (
      <span>{text}</span>
    );
  }, [changeColor]);

  return (
    <div 
      className="w-full h-full flex flex-col gap-2 justify-center items-center"
      style={{ 
        backgroundColor: colors[colorIndex].bg,
        transition: 'background-color 0.5s ease'
      }}
    >
      <div 
        className="text-6xl font-semibold"
        style={{ 
          color: colors[colorIndex].text,
          transition: 'color 0.5s ease'
        }}
      >
       
      </div>
    </div>
  );
}

export default TypeEffect;