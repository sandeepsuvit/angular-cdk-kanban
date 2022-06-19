import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { IKanbanColumnBlock, ITask } from './interfaces/kanban';
import { KanbanService } from './services/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  kanbanColumns: Array<IKanbanColumnBlock> = [];

  // Column scroll helpers
  isMouseDownOnColumn = false;
  currentColumnOffsetLeft!: number;
  currentColumnScrollLeft!: number;

  constructor(
    private kanbanService: KanbanService,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  /**
   * Register onload subcribers
   *
   * @memberof KanbanComponent
   */
  loadTasks() {
    this.kanbanService.getColumns().subscribe(columns => this.kanbanColumns = columns);
  }

  /**
   * Handle drop column event
   *
   * @param {CdkDragDrop<IKanbanColumnBlock[]>} event
   * @memberof KanbanComponent
   */
  handleDropColumns(event: CdkDragDrop<IKanbanColumnBlock[]>) {
    console.log('dropped columns', event);

    moveItemInArray(this.kanbanColumns, event.previousIndex, event.currentIndex);
  }

  /**
   * Handle drop task event
   *
   * @param {CdkDragDrop<ITask[]>} event
   * @memberof KanbanComponent
   */
  handleDropTasks(event: CdkDragDrop<ITask[]>) {
    console.log('dropped tasks', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
