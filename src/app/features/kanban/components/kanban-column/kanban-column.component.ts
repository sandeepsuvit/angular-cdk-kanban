import { Component, Input, OnInit } from '@angular/core';
import { IKanbanColumnBlock } from '../../interfaces/kanban';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {
  @Input() column!: IKanbanColumnBlock;

  constructor() { }

  ngOnInit(): void {
  }

}
