import InventionHeader from "./InventionHeader";
import InventionRow from "./InventionRow";

export default function InventionContainer(){
  return(
    <div>
      <InventionHeader />
      {/* api 연결 시 렌더링 하는 로직 수정 */}
      {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} />
      ))}
    </div>
  )
}