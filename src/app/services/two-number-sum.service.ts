import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoNumberSumService {

  constructor() { }

  public getTwoNumberSum(arrayNumbers: number[], targetSum: number): number[] {
    const result = [];
    let complementNumber = 0;

    arrayNumbers.every(num => {
      complementNumber = targetSum - num;
      if (num !== complementNumber && arrayNumbers.includes(complementNumber)) {
        result.push(complementNumber, num);
        return false;
      }
      return true;
    });

    return result;
  }
}
