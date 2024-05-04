import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})

export class MockInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/api/tasks')) {
      return of(new HttpResponse({ status: 200, body: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] }));
    }

    return next.handle(request);
  }
}
