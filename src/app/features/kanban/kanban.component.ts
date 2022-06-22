import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IKanbanColumnBlock, ITask } from './interfaces/kanban';
import { KanbanService } from './services/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  @ViewChild('colElem') colElem!: ElementRef;

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
   * Check if dragging is allowed on the current mode
   *
   * @private
   * @param {HTMLDivElement} targetElem
   * @returns
   * @memberof KanbanComponent
   */
  private isDragEnabled(targetElem: HTMLDivElement) {
    // Classes to disable drag for
    const disabledClasses = [
      'cdk-drag-handle',
      'kanban-column__drag-handle',
    ];

    // Check the elements that matches the classes
    const foundMatch = disabledClasses.find(disabledClass =>
      targetElem.parentElement?.parentElement?.classList.contains(disabledClass) ||
      targetElem.parentElement?.classList.contains(disabledClass)
    );

    return !foundMatch;
  }

  /**
   * Register onload subcribers
   *
   * @memberof KanbanComponent
   */
  private loadTasks() {
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

  /**
   * Handle cancel event on keyboard
   *
   * @param {KeyboardEvent} event
   * @memberof KanbanComponent
   */
  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      document.dispatchEvent(new Event('mouseup'));
    }
  }

  /**
   * Start dragging event handler
   *
   * @param {MouseEvent} event
   * @memberof KanbanComponent
   */
  @HostListener('mousedown', [`$event`, `$event.target`])
  onMouseStartDragEventHandler(event: MouseEvent, targetElem: HTMLDivElement) {

    // Check if the selected element is the target, else return the event
    if (!this.isDragEnabled(targetElem)) {
      return;
    }

    const { offsetLeft, scrollLeft } = this.colElem.nativeElement;

    this.isMouseDownOnColumn = true;
    this.currentColumnOffsetLeft = event.pageX - offsetLeft;
    this.currentColumnScrollLeft = scrollLeft;
  }



  /**
   * Stop dragging event handler
   *
   * @param {MouseEvent} event
   * @memberof KanbanComponent
   */
  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onMouseStopDragEventHandler(event: MouseEvent) {
    this.isMouseDownOnColumn = false;
  }

  /**
   * Mouse move event handler
   *
   * @param {MouseEvent} event
   * @returns
   * @memberof KanbanComponent
   */
  @HostListener('mousemove', ['$event'])
  onMouseMoveEventHandler(event: MouseEvent) {
    event.preventDefault();

    if (!this.isMouseDownOnColumn) {
      return;
    }

    const { offsetLeft } = this.colElem.nativeElement;
    const pageX = event.pageX - offsetLeft;
    const scroll = pageX - Number(this.currentColumnOffsetLeft);
    this.colElem.nativeElement.scrollLeft = this.currentColumnScrollLeft - scroll;
  }
}
