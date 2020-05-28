import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoardArray } from "./board-array.interface";

@Injectable({ providedIn: 'root' })
export class BoardArrayService {

  boardArray: BoardArray[] = [];
  columnAmount = 7;
  rowAmount = 6;

  boardArraySubject = new BehaviorSubject<any>(this.boardArray);

  constructor() {
    console.log('board-array initialized');
    this.initializeBoardArray();
    // this.calculateBoardData();
    console.log(this.boardArray);
  }



  initializeBoardArray() {
    let columnCount = 0;
    let rowCount = 0;
    for (let i = 0; i < 42; i++) {
      this.boardArray.push({
        id: i,
        column: columnCount,
        row: rowCount,
        columnSet: this.initializeColumnArray(columnCount),
        rowSet: this.initializeRowArray(rowCount),
        diagPosSet: this.initializePosDiagArray(i),
        diagNegSet: []
      });
      // modify the column and row counts to add this data properly
      columnCount++;
      if (columnCount % 7 === 0) {
        rowCount++;
      }
      if (columnCount === 7) {
        columnCount = 0;
      }


    }
  }

  initializeColumnArray(columnCount) {
    const columnSet = [];
    // get the column for the id that you are on
    // add the column number as many times as there are rowAmount
    // pushing those numbers into an array
    for (let i = 0; i < this.rowAmount; i++) {
      columnSet.push(columnCount + this.columnAmount * i);
    }
    // then fianlly returning that array
    return columnSet;
  }

  initializeRowArray(rowCount) {
    const rowSet = [];
    // get the column for the id that you are on
    // add the column number as many times as there are rowAmount
    // pushing those numbers into an array
    for (let i = 0; i < this.columnAmount; i++) {
      rowSet.push(rowCount * this.columnAmount + i);
    }
    // then fianlly returning that array
    return rowSet;
  }

  initializePosDiagArray(id) {
    let posDiagSet = [];
    // find the first number in the set
    const firstNumberInSet = this.findFirstNumberInSet(id);
    posDiagSet = this.findRestOfNumbersInSet(firstNumberInSet);
    return posDiagSet;
  }


  findFirstNumberInSet(num) {
    let newNum = num;
    // loop at max 7 times
    for (let i = 0; i < 7; i++) {
      // if it hits any of these number you will return the number and exit the function
      if (newNum <= 7 || newNum === 14 || newNum === 21 || newNum === 28 || newNum === 35) {
        return newNum;
      }
      // if it doesn't it will shift the number up and left one position
      // the loop will then start over and test that number
      newNum = newNum - this.columnAmount - 1;
    }
  }

  findRestOfNumbersInSet(num) {
    const newNumArr = [];
    let newNum = num;
    newNumArr.push(num);
    // loop at max 7 times
    for (let i = 0; i < 7; i++) {
      // if it hits any of these numbers you will exit the loop
      if (newNum >= 35 || newNum === 6 || newNum === 13 || newNum === 20 || newNum === 27 || newNum === 34) {
        return newNumArr;
      }
      // if it doesn't it will shift the number down and right one position
      // the loop will then start over and test that number
      newNum = newNum + this.columnAmount + 1;
      newNumArr.push(newNum);
    }
  }
}
