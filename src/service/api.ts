import { ajax, AjaxRequest } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import handleError from './handle-error';

export default function Api() {
    return {
        get: <T>(url: string, headers?: Record<string, string>) =>
            ajax.get<T>(
                url, 
                headers ?? {}
            ).pipe<T>(catchError(handleError)),
        getJSON: (url: string, headers?: Record<string, string>) =>
            ajax.getJSON(
                url, 
                headers
            ).pipe(catchError(handleError)),
        post: (url: string, body?: any, headers?: Record<string, string>) => 
            ajax.post(
                url,
                body,
                headers ?? {}
            ).pipe(catchError(handleError)),
        put: (url: string, body?: any, headers?: Record<string, string>) =>
            ajax.put(
                url,
                body,
                headers ?? {}
            ).pipe(catchError(handleError)),
        delete: (url: string, headers?: Record<string, string>) =>
            ajax.delete(
                url,
                headers,
            ).pipe(catchError(handleError)),
        ajax: ({ url, ...ops }: AjaxRequest, headers?: any) =>
            ajax({
                headers: headers,
                url: url,
                ...ops,
            }).pipe(catchError(handleError)),
    };
}