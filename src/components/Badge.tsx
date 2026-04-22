interface Prop {
  children?: string;
  color: "blue" | "violet" | "green";
}

export function Badge({ children = "", color }: Prop) {
  const bgColor = {
    green: "bg-profile-green text-[#BAF3DB]",
    violet: "bg-profile-violet text-[#EED7FC]",
    blue: "bg-profile-cobalt text-[#CFE1FD]",
  };

  return (
    <div
      className={`${bgColor[color]} inline-flex rounded-md px-1.5 py-1 text-sm`}
    >
      {children}
    </div>
  );
}
