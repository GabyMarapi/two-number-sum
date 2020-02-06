import { TestBed } from '@angular/core/testing';
import { TwoNumberSumService } from './two-number-sum.service';

describe('TwoNumberSumService', () => {
  let twoNumberSumService: TwoNumberSumService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TwoNumberSumService
      ]
    });
    twoNumberSumService = TestBed.get(TwoNumberSumService);
  });


  it('should return [-1,11] with arrayNumbers [3,5,-4,8,11,1,-1,6] and targetNumber 10 ', () => {
    const arrayNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
    const targetSum = 10;
    const result = [-1, 11];

    expect(twoNumberSumService.getTwoNumberSum(arrayNumbers, targetSum)).toEqual(result);
  });

  it('should return [] with arrayNumbers [2,-7,4,8,-11] and targetNumber 56 ', () => {
    const arrayNumbers = [2, -7, 4, 8, -11];
    const targetSum = 56;
    const result = [];

    expect(twoNumberSumService.getTwoNumberSum(arrayNumbers, targetSum)).toEqual(result);
  });
});
