import { BoardArrayService } from './board-array/board-array.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public translateExp = 'translateX(0px)';
  public whosTurnIsIt = 'Red Team can start the game!';
  public redTeamsTurn = true;
  public redTeamsColor = 'rgba(224, 36, 36, 0.705)';
  public blackTeamsColor = 'rgba(26, 26, 26, 0.705)';

  constructor(public boardArraySvc: BoardArrayService) { }

  chipHoverTranslate(column) {
    this.translateExp = `translateX(${column}px)`;
  }

  toggleTurn() {
    const blackTeamsTurn = 'It is Black Teams turn';
    const redTeamsTurn = 'It is Red Teams turn';
    // this.whosTurnIsIt = this.whosTurnIsIt === blackTeamsTurn ? redTeamsTurn : blackTeamsTurn;
    if (this.whosTurnIsIt === blackTeamsTurn) {
      this.whosTurnIsIt = redTeamsTurn;
      this.redTeamsTurn = true;
    } else {
      this.redTeamsTurn = false;
      this.whosTurnIsIt = blackTeamsTurn;
    }
  }

  dropPeice() {

  }
}
