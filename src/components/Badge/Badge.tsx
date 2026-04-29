import { getTagColor } from "@/util/tags";

interface Prop {
  children?: string;
}

export function Badge({ children = "" }: Prop) {
  const colorClass = getTagColor(children);

  return (
    <div
      className={`$inline-flex rounded-md px-1.5 py-1 text-sm ${colorClass}`}
    >
      {children}
    </div>
  );
}
