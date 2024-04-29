import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {TeamEntity} from "./model/team.entity";
import {TeamService} from "./service/team.service";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIcon],
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
  deleteMember(id: any): void {
    this.teamService.delete(id).subscribe(() => {
      // Actualizar la lista de miembros después de eliminar
      this.getTeamData();
    });
  }
  private deletemember(id: number) {
    this.teamService.delete(id).subscribe(() => {
      this.teamMembers = this.teamMembers.filter(member => member.id !== id);
    });
  }

  onDeleteItem(member: TeamEntity): void {
    this.deletemember(member.id);
  }

}
