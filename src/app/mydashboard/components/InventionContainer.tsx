"use client";

import { useWindowSize } from "../hooks/usewindow-size";

import { InventionHeader } from "./InventionHeader";
import { InventionRow } from "./InventionRow";

export function InventionContainer() {
  const widthSize = useWindowSize();
  return (
    <div>
      <div>{widthSize > 768 && <InventionHeader />}</div>
      {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} />
      ))}
    </div>
  );
}
