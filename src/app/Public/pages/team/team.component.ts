import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {TeamEntity} from "./model/team.entity";
import {TeamService} from "./service/team.service";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIcon, MatFormField, FormsModule, MatInput],
  standalone: true
})
export class TeamComponent implements OnInit {
  teamMembers: TeamEntity[] = [];
  @Input()member: TeamEntity;



  @Input() editMode = false;
  constructor(
    private teamService: TeamService
  ) {
    this.member ={} as TeamEntity;
  }

  ngOnInit(): void {
    this.getTeamData();
  }

  getTeamData(): void {
    this.teamService.getAll().subscribe((res: any) => {
      this.teamMembers = res;
    });
  }
  deleteMember(id: any): void {
    this.teamService.delete(id).subscribe(() => {
      this.getTeamData();
    });
  }
  onSubmit() {
      if (this.editMode) {
        this.teamService.update(this.member.id, this.member).subscribe({
          next: () => {
            this.teamService.getAll().subscribe((res: any) => {
              this.teamMembers = res;
              this.member = {} as TeamEntity;
              this.editMode = false;
            });
          }
        });
      } else {
        this.teamService.create(this.member).subscribe({
          next: (response: any) => {
            this.teamMembers.push(response);
            this.member = {} as TeamEntity;
          }
        });
      }
  }

  onCancel() {
    this.member = {} as TeamEntity;
    this.editMode = false;
  }

  edit(member: TeamEntity) {
    this.editMode = true;
    this.member = {...member};
  }

  //Delete ejemplo
  /*
  private deletemember(id: number) {
    this.teamService.delete(id).subscribe(() => {
      this.teamMembers = this.teamMembers.filter(member => member.id !== id);
    });
  }

  onDeleteItem(member: TeamEntity): void {
    this.deletemember(member.id);
  }
*/

}
