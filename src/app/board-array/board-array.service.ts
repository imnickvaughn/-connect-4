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
        columnSet: [],
        rowSet: [],
        diagPosSet: [],
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

  // initializeColumnArray(id) {
  //   const columnArray = [];
  //   const columnSet = [];
  //   // for columnAmount
  //   // get the column for the id that you are on
  //   // add the column number as many times as there are rowAmount
  //   // pushing those numbers into an array
  //   for (let i = 0; i < this.rowAmount; i++) {
  //     columnSet.push(this.boardArray[id].column + this.columnAmount);
  //   }
  //   // then fianlly returning that array
  //   return columnSet;
  // }

}
