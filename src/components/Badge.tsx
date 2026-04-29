interface BadgeProps {
  index: number;
  content: string;
}

export function Badge({ index, content }: BadgeProps) {
  const bgColor = [
    "bg-profile-green text-[#BAF3DB]",
    "bg-profile-violet text-[#EED7FC]",
    "bg-profile-cobalt text-[#CFE1FD]",
  ];

  const color = bgColor[index % bgColor.length];

  return (
    <div className={`${color} inline-flex rounded-md px-1.5 py-1 text-sm`}>
      {content}
    </div>
  );
}
