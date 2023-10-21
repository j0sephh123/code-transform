import ArrayUtils from '../utils/ArrayUtils';

type StoreVariable = {
  name: string;
  line: number;
};

export type Store = {
  variables: StoreVariable[];
};

type VariableStoreI = {
  add(storeVariable: StoreVariable): void;
  remove(nameIdentifier: StoreVariable['name']): void;
  isEmpty(): boolean;
  getVariables(): StoreVariable[];
};

export default class VariableStore implements VariableStoreI {
  private _variables: StoreVariable[] = [];

  public add(storeVariable: Parameters<VariableStoreI['add']>[0]) {
    this._variables.push(storeVariable);
  }

  public remove(nameIdentifier: Parameters<VariableStoreI['remove']>[0]) {
    ArrayUtils.deleteObject(this._variables, nameIdentifier);
  }

  public isEmpty() {
    return this._variables.length === 0;
  }

  public getVariables() {
    return this._variables;
  }
}
