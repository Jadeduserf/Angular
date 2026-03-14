import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [TasksComponent,
                 TaskComponent,
                 NewTaskComponent
                ],
                //only the TasksComponent is exported because it's the only one that will be used outside of this module, the TaskComponent and NewTaskComponent are only used inside the TasksComponent, so they don't need to be exported.
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule]
 
})
export class TasksModule {

}