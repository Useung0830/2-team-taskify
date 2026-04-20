import Button from "@/components/button/Button";

export default function Home() {
  const TYPES = ["primary", "secondary", "ghost"] as const;
  const SIZES = ["lg", "md", "sm", "xs"] as const;

  return (
    <>
      {TYPES.map((type) => (
        <div key={type} className="flex flex-col gap-6">
          {SIZES.map((size) => {
            if (type === "ghost" && (size === "sm" || size === "xs"))
              return null;

            return (
              <div key={`${type}-${size}`} className="grid grid-cols-4 gap-4">
                {/* 1. normal */}
                <div>
                  <span>state=normal | {size}</span>
                  <Button colortype={type} size={size}>
                    Label
                  </Button>
                </div>

                {/* 2. active */}
                <div>
                  <span>state=active | {size}</span>
                  <Button colortype={type} size={size} isActive>
                    Label
                  </Button>
                </div>

                {/* 3. hover */}
                <div>
                  <span>state=hover | {size}</span>
                  <Button colortype={type} size={size} isHovered>
                    Label
                  </Button>
                </div>

                {/* 4. disable */}
                <div>
                  <span>state=disable | {size}</span>
                  <Button colortype={type} size={size} disabled>
                    Label
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
