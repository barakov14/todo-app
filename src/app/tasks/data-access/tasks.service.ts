import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})

export class TasksService {
  public currentTasksPage = new BehaviorSubject<null | string>(null)
}
