import main from './main';
import * as cases from './cases';

describe('main', () => {
  test.only('case 1', () => {
    expect(main(cases.case1)).toEqual(`Unused Variables:
- a (Line: 1)
- b (Line: 2)
- c (Line: 3)`);
  });
  test.only('case 2', () => {
    expect(main(cases.case2)).toEqual(`Unused Variables:
- z (Line: 3)
- sum (Line: 4)`);
  });
  test('case 3', () => {
    expect(main(cases.case3)).toEqual(`Unused Variables:
  - b (Line: 1)`);
  });

  test('case 4', () => {
    expect(main(cases.case4)).toEqual(`Unused Variables:
  - None`);
  });

  test('case 5', () => {
    expect(main(cases.case5)).toEqual(`Unused Variables:
  - y (Line: 2)`);
  });

  test('case 6', () => {
    expect(main(cases.case6)).toEqual(`Unused Variables:
  - j (Line: 2)
  - l (Line: 7)`);
  });

  test('case 7', () => {
    expect(main(cases.case7)).toEqual(`Unused Variables:
  - index (Line: 3)
  - arr (Line: 3)`);
  });

  test('case 8', () => {
    expect(main(cases.case8)).toEqual(`Unused Variables:
  - age (Line: 5)
  - job (Line: 5)`);
  });

  test('case 9', () => {
    expect(main(cases.case9)).toEqual(`Unused Variables:
  - y (Line: 3)
  - z (Line: 3)`);
  });

  test('case 10', () => {
    expect(main(cases.case10)).toEqual(`Unused Variables:
  - b (Line: 1)
  - c (Line: 1)
  - e (Line: 2)`);
  });
});
