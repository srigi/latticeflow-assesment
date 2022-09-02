import clsx from "clsx";
import { FunctionComponent } from "react";
import { Item } from "src/types";

const Item: FunctionComponent<Pick<Item, "color" | "dot" | "size">> = ({
  color,
  dot,
  size,
}) => {
  return (
    <article
      className={clsx(
        "bg-gray-100 cursor-pointer hover:border hover:border-gray-400",
        "flex w-[128px] h-[128px] items-center justify-center",
        "opacity-40"
      )}
    >
      <div
        className={clsx(
          {
            "bg-blue-400": color === "blue",
            "bg-green-500": color === "green",
            "bg-orange-400": color === "orange",
            "w-[96px] h-[96px]": size === "large",
            "w-[48px] h-[48px]": size === "small",
          },
          "flex items-center justify-center"
        )}
      >
        {dot && (
          <div
            className={clsx(
              {
                "border-blue-600": color === "blue",
                "border-green-700": color === "green",
                "border-orange-600": color === "orange",
              },
              "w-[12px] h-[12px] bg-white border-2 rounded-full"
            )}
          />
        )}
      </div>
    </article>
  );
};

export default Item;
