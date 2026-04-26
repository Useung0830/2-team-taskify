import Image from "next/image";

interface ProfileProps {
  name: string;
  type: "member" | "invite";
  imageUrl?: string | null;
}

export function Profile({ name, type, imageUrl }: ProfileProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {type === "member" && (
        <div className="bg-profile-green relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-2xl">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] font-semibold whitespace-nowrap text-white">
              {/* '민영' 대신 이름 첫 글자를 보여주는 게 자연스러워요 */}
              {name.slice(0, 2)}
            </span>
          )}
        </div>
      )}
      <span className="inline-block truncate text-lg max-md:max-w-37.5 max-md:text-base">
        {name}
      </span>
    </div>
  );
}
