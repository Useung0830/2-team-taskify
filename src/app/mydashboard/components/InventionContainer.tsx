import { InventionHeader } from "./InventionHeader";
import { InventionRow } from "./InventionRow";

export function InventionContainer() {
  return (
    <div>
      <div className="hidden md:block">
        <InventionHeader />
      </div>
      {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} />
      ))}
    </div>
  );
}
