import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';

// Angular cdk dnd
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanColumnComponent } from './components/kanban-column/kanban-column.component';
import { KanbanTaskComponent } from './components/kanban-task/kanban-task.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    KanbanComponent,
    KanbanColumnComponent,
    KanbanTaskComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    DragDropModule,
    FontAwesomeModule,
  ]
})
export class KanbanModule {
  constructor(
    private library: FaIconLibrary
  ) {
    // Configure fontawesome library
    this.library.addIconPacks(fas, far);
  }
}
