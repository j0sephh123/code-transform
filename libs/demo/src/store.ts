type StoreVariable = {
  name: string;
  line: number;
};

export type Store = {
  variables: StoreVariable[];
};

export const store: Store = {
  variables: [],
};
