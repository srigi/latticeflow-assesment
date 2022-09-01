import { FunctionComponent } from "react";

import Item from "src/components/Item";
import { Item as ItemType } from "src/types";

interface Props {
  items: Array<ItemType>;
}

const Grid: FunctionComponent<Props> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-[24px]">
      {items.map((i) => (
        <Item key={i.id} color={i.color} dot={i.dot} size={i.size} />
      ))}
    </div>
  );
};

export default Grid;
