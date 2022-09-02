import { atom } from "jotai";

import { Item } from "src/types";
import dataset from "src/dataset.json";

export default atom<Item[]>(dataset as Item[]);
