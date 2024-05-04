import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class StringService {
  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
