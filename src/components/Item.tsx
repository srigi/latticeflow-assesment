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
        {
          "bg-blue-400": color === "blue",
          "bg-green-500": color === "green",
          "bg-orange-400": color === "orange",
        },
        "w-[128px]"
      )}
    >
      {JSON.stringify({ color, dot, size }, null, 2)}
    </article>
  );
};

export default Item;
