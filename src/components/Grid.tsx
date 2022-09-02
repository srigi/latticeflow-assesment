import { useAtom } from "jotai";
import { FunctionComponent } from "react";

import Item from "src/components/Item";
import { Item as ItemType } from "src/types";
import selection from "src/atoms/selection";

interface Props {
  items: Array<ItemType>;
}

const Grid: FunctionComponent<Props> = ({ items }) => {
  const [selected, setSelected] = useAtom(selection);

  const onItemClick = (id: string) => {
    setSelected((currentSelection) => {
      if (currentSelection.includes(id)) {
        return currentSelection.filter((csId) => csId !== id);
      } else {
        return [...currentSelection, id];
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-[24px]">
      {items.map((i) => (
        <Item
          key={i.id}
          id={i.id}
          color={i.color}
          dot={i.dot}
          size={i.size}
          notifyClicked={onItemClick}
          isSelected={selected.includes(i.id)}
        />
      ))}
    </div>
  );
};

export default Grid;
