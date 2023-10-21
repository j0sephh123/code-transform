import main from './main';
import * as cases from './cases';

describe('main', () => {
  test('case 1', () => {
    expect(main(cases.case1)).toEqual(`Unused Variables:
- a (Line: 1)
- b (Line: 2)
- c (Line: 3)`);
  });
});
