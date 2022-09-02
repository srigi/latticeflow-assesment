import { useAtom } from "jotai";
import { FunctionComponent } from "react";

import Item from "src/components/Item";
import dataset from "src/atoms/dataset";
import selection from "src/atoms/selection";

const Grid: FunctionComponent = () => {
  const [items] = useAtom(dataset);
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
