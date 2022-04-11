import { Observable, of } from 'rxjs';

export default function handleError<T>(err: any, caught: Observable<T>): Observable<any> {

    alert('網頁出現錯誤，即將導回主頁');
    window.location.reload();
    window.location.href = '/';
    console.error(err);

   return of();
}