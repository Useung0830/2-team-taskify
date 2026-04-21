import ColumnAddList from "./components/ColumnAddList";
import ColumnList from "./components/ColumnList";

export default function Dashboard() {
  return (
    <div>
      <h1 className="flex px-12.5 pt-6 pb-3.5 text-4xl font-bold text-gray-100">
        포트폴리오
      </h1>
      <div className="flex gap-15 px-12.5 py-2.5">
        {/* @TODO 실제로는 데이터를 prop으로 넘겨주어야 한다. */}
        <ColumnList columnTitle="To-do" />
        <ColumnList columnTitle="On Progress" />
        <ColumnList columnTitle="Done" />
        <ColumnAddList />
      </div>
    </div>
  );
}
