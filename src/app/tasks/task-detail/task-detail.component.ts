import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../../task';
import { TaskService } from "../../task.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.less']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.taskService.getTask(name)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

}
