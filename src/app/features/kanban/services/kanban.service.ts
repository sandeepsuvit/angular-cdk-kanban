import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IKanbanColumnBlock } from '../interfaces/kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  columns: Array<IKanbanColumnBlock> = [
    {
      id: "1", name: "To do", tasks: [
        {
          id: '1',
          identifier: "TSK01",
          type: "bug",
          title: "Data analytics podcast",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Data analytics",
          priority: 'high'
        },
        {
          id: '7',
          identifier: "TSK07",
          type: "bug",
          title: "PR firm outreach",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "SEO",
          priority: 'low'
        },
        {
          id: '8',
          identifier: "TSK08",
          type: "bug",
          title: "Google adwords best practices",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "SEO",
          priority: 'high'
        },
        {
          id: '9',
          identifier: "TSK09",
          type: "bug",
          title: "Andrioid app new landing page",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Android development",
          priority: 'medium'
        },
        {
          id: '10',
          identifier: "TSK010",
          type: "bug",
          title: "Widgets for analytics",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Data analytics",
          priority: 'low'
        },
        {
          id: '11',
          identifier: "TSK011",
          type: "bug",
          title: "Branding guidelines",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "SEO",
          priority: 'medium'
        }
      ]
    },
    {
      id: "2", name: "In progress", tasks: [
        {
          id: '2',
          identifier: "TSK02",
          type: "task",
          title: "Going live with server deployment",
          dueDate: "Jan 20, 2022",
          totalComments: 3,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "DevOps",
          priority: 'high'
        },
      ]
    },
    {
      id: "4", name: "In review", tasks: [
        {
          id: '4',
          identifier: "TSK04",
          type: "bug",
          title: "Dashboard widgets aggregation",
          dueDate: "Jan 20, 2022",
          totalComments: 50,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Development",
          priority: 'low'
        },
      ]
    },
    {
      id: "5", name: "QA pending", tasks: [
        {
          id: '5',
          type: "bug",
          identifier: "TSK05",
          title: "CSS optimisations",
          dueDate: "Jan 20, 2022",
          totalComments: 5,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Development",
          priority: 'high'
        },
      ]
    },
    {
      id: "6", name: "Deployed", tasks: [
        {
          id: '6',
          identifier: "TSK06",
          type: "task",
          title: "Mobile UI customizations",
          dueDate: "Jan 20, 2022",
          totalComments: 6,
          owner: { firstName: 'Jhon', lastName: 'Doe' },
          assignee: { firstName: 'Sandeep', lastName: 'Kanangatt' },
          epicName: "Development",
          priority: 'high'
        }
      ]
    }
  ];

  constructor() { }

  getColumns(): Observable<Array<IKanbanColumnBlock>> {
    return of(this.columns);
  }
}
