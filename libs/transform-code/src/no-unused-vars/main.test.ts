import main from './main';
import * as cases from './cases';

describe('main', () => {
  test('case 1', () => {
    expect(main(cases.case1)).toEqual(`Unused Variables:
- a (Line: 1)
- b (Line: 2)
- c (Line: 3)`);
  });
  test('case 2', () => {
    expect(main(cases.case2)).toEqual(`Unused Variables:
- z (Line: 3)
- sum (Line: 4)`);
  });
  test('case 3', () => {
    expect(main(cases.case3)).toEqual(`Unused Variables:
- multiply (Line: 1)
- b (Line: 1)`);
  });

  test('case 4', () => {
    expect(main(cases.case4)).toEqual(`Unused Variables:
- None`);
  });

  test('case 5', () => {
    expect(main(cases.case5)).toEqual(`Unused Variables:
- y (Line: 2)
- outer (Line: 1)`);
  });

  test('case 6', () => {
    expect(main(cases.case6)).toEqual(`Unused Variables:
- j (Line: 2)
- l (Line: 6)`);
  });

  test('case 7', () => {
    expect(main(cases.case7)).toEqual(`Unused Variables:
- index (Line: 2)
- arr (Line: 2)`);
  });

  test('case 8', () => {
    expect(main(cases.case8)).toEqual(`Unused Variables:
- name (Line: 5)
- age (Line: 5)
- job (Line: 5)`);
  });

  test('case 9', () => {
    expect(main(cases.case9)).toEqual(`Unused Variables:
- x (Line: 2)
- y (Line: 2)
- z (Line: 2)`);
  });

  test('case 10', () => {
    expect(main(cases.case10)).toEqual(`Unused Variables:
- c (Line: 1)
- e (Line: 2)`);
  });
  test('case 11', () => {
    expect(main(cases.case11)).toEqual(`Unused Variables:
- None`);
  });

  test('case 12', () => {
    expect(main(cases.case12)).toEqual(`Unused Variables:
- MyClass (Line: 1)`);
  });

  test('case 13', () => {
    expect(main(cases.case13)).toEqual(`Unused Variables:
- None`);
  });

  test('case 14', () => {
    expect(main(cases.case14)).toEqual(`Unused Variables:
- a (Line: 1)`);
  });

  test('case 15', () => {
    expect(main(cases.case15)).toEqual(`Unused Variables:
- a (Line: 2)`);
  });
  test('case 16', () => {
    expect(main(cases.case16)).toEqual(`Unused Variables:
- num2 (Line: 2)
- result (Line: 3)`);
  });

  test('case 17', () => {
    expect(main(cases.case17)).toEqual(`Unused Variables:
- array2 (Line: 2)
- combined (Line: 3)`);
  });
});
