import { atom, useAtom } from "jotai";
import { FunctionComponent, useMemo } from "react";

import dataset from "src/atoms/dataset";
import selection from "src/atoms/selection";

interface Props {
  target: "dot" | "large" | "small";
  targetPercentage: number;
}

const Stats: FunctionComponent<Props> = ({ target, targetPercentage }) => {
  const selectedPercentageAtom = useMemo(
    () =>
      atom((get) => {
        const allItems = get(dataset);
        const selectedItemsIds = get(selection);
        const selectedTargetItems = allItems
          .filter((i) => (target === "dot" ? i.dot : i.size === target))
          .filter((i) => selectedItemsIds.includes(i.id));

        return (
          Math.round(
            (selectedTargetItems.length / selectedItemsIds.length) * 100 * 100
          ) / 100 || 0
        );
      }),
    [target]
  );
  const [selectedPercentage] = useAtom(selectedPercentageAtom);

  return (
    <div className="mb-4 flex-1 max-w-sm">
      <h3 className="mb-6 ml-4">
        <strong>{target}</strong> target:{" "}
        <strong className="text-orange-700">{targetPercentage}%</strong>
      </h3>

      <div className="relative">
        <div
          className="absolute bg-orange-700 h-4 w-1 -top-4"
          style={{
            left: `${targetPercentage}%`,
          }}
        />
        <div className="bg-gray-700 h-1 -mr-1" />
        <div
          className="absolute bg-indigo-600 h-4 w-1 top-1"
          style={{
            left: `${selectedPercentage}%`,
          }}
        />
      </div>

      <div className="mt-4">
        <p>
          actual:{" "}
          <strong className="text-indigo-600">{selectedPercentage}%</strong>
        </p>
        <p>
          difference:{" "}
          <strong>
            {(Math.round((targetPercentage - selectedPercentage) * 100) / 100) *
              -1}
            %
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Stats;
