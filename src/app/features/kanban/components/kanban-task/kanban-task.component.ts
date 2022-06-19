import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../interfaces/kanban';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.scss']
})
export class KanbanTaskComponent implements OnInit {
  @Input() task!: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
