import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {TeamEntity} from "./model/team.entity";
import {TeamService} from "./service/team.service";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule, DatePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TaskEntity} from "./model/task.entity";
import {TaskService} from "./service/task.service";
import {MatDatepickerModule,} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIcon, MatFormField, FormsModule, MatInputModule,MatDatepickerModule, MatNativeDateModule],
  standalone: true
})
export class TeamComponent implements OnInit {
  teamMembers: TeamEntity[] = [];
  task: TaskEntity[] = [];

  @Input()member: TeamEntity;
  @Input()taska: TaskEntity;
  @Input() editMode = false;
  @Input() editMode2 = false;
  constructor(
    private taskService: TaskService,
    private teamService: TeamService,
    public datePipe: DatePipe
  ) {
    this.member ={} as TeamEntity;
    this.taska ={} as TaskEntity;
  }

  ngOnInit(): void {
    this.getTeamData();
    this.getTaskData()
  }

  getTeamData(): void {
    this.teamService.getAll().subscribe((res: any) => {
      this.teamMembers = res;
    });
  }
  getTaskData(): void {
    this.taskService.getAll().subscribe((res: any) => {
      this.task = res;
    });
  }
  deleteMember(id: any): void {
    this.teamService.delete(id).subscribe(() => {
      this.getTeamData();
    });
  }
  deleteTask(id: any): void {
    this.taskService.delete(id).subscribe(() => {
      this.getTaskData();
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
  onSubmitTask() {
    if (this.editMode2) {
      this.taskService.update(this.taska.id, this.taska).subscribe({
        next: () => {
          this.taskService.getAll().subscribe((res: any) => {
            this.task = res;
            this.taska = {} as TaskEntity;
            this.editMode2 = false;
          });
        }
      });
    } else {
      this.taskService.create(this.taska).subscribe({
        next: (response: any) => {
          this.task.push(response);
          this.taska = {} as TaskEntity;
        }
      });
    }
  }

  onCancel() {
    this.member = {} as TeamEntity;
    this.editMode = false;
  }
  onCancelTask() {
    this.taska = {} as TaskEntity;
    this.editMode2 = false;
  }


  edit(member: TeamEntity) {
    this.editMode = true;
    this.member = {...member};
  }
  editTask(taska: TaskEntity) {
    this.editMode2 = true;
    this.taska = {...taska};
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
