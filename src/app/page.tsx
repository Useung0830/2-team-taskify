import Button from "@/components/Button";

export default function Home() {
  const TYPES = ["primary", "secondary", "ghost"] as const;
  const SIZES = ["lg", "md", "sm", "xs"] as const;

  return (
    // 배경색을 어둡게 하여 ghost 버튼이 잘 보이게 설정
    <div className="flex min-h-screen flex-col gap-12 bg-[#1a1a1a] p-10">
      {TYPES.map((type) => (
        <div key={type} className="flex flex-col gap-8">
          {SIZES.map((size) => {
            if (type === "ghost" && (size === "sm" || size === "xs"))
              return null;

            return (
              <div
                key={`${type}-${size}`}
                className="grid grid-cols-4 items-end gap-4"
              >
                {/* 1. normal */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-gray-500">
                    state=normal | {size}
                  </span>
                  <Button colortype={type} size={size}>
                    유승님
                  </Button>
                </div>

                {/* 2. active */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-gray-500">
                    state=active | {size}
                  </span>
                  <Button colortype={type} size={size} isActive>
                    지원님
                  </Button>
                </div>

                {/* 3. hover */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-gray-500">
                    state=hover | {size}
                  </span>
                  <Button colortype={type} size={size} isHover>
                    태양님
                  </Button>
                </div>

                {/* 4. disable */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-gray-500">
                    state=disable | {size}
                  </span>
                  <Button colortype={type} size={size} disabled>
                    채민님
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
