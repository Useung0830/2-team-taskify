export default function Profile({ name }: any) {
  return (
    <div className="flex gap-1.5">
      <div className="bg-profile-cobalt flex h-6 w-6 items-center justify-center rounded-full text-[10px]">
        정은
      </div>
      {name}
    </div>
  );
}
