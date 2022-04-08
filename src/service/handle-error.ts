import { Observable, of } from 'rxjs';

export default function handleError<T>(err: any, caught: Observable<T>): Observable<any> {

    console.error(err);

   return of();
}