import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTasks } from '../../store/action';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

  constructor(private store: Store) {}
  
  ngOnInit() {
    console.log("call get all tasks")

       this.store.dispatch(loadTasks());
      console.log("call get all tasks")
  }
}
