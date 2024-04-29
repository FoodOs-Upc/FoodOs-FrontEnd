import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {TeamEntity} from "./model/team.entity";
import {TeamService} from "./service/team.service";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [MatCardModule, MatButtonModule,CommonModule],
  standalone: true
})
export class TeamComponent implements OnInit {
  teamMembers: TeamEntity[] = [];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeamData();
  }

  getTeamData(): void {
    this.teamService.getAll().subscribe((res: any) => {
      this.teamMembers = res;
      console.log(res)
    });
  }

}
