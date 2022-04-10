import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { AjaxRequestOption } from 'src/types/ajax.type';
import handleError from './handle-error';

const AjaxRequestOptionDefaultValue: AjaxRequestOption = {
	url: '',
	method: 'GET',
	async: true,
    headers: {},
    timeout: 8000,
    crossDomain: true,
    withCredentials: false,
    responseType: 'json'
}

export default function Api() {
    
    return {
        get: <T = any>(url: string, headers?: Record<string, string>) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'GET',
                url: url,
                headers:  headers,
            }).pipe(catchError(handleError)),
        getJSON: <T = any>(url: string, headers?: Record<string, string>) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'GET',
                url: url,
                headers:  headers,
            }).pipe(map(res => ({...res, 
                response: typeof res.response === 'string' ? JSON.parse(res.response) : res.response
            }))).pipe(catchError(handleError)),
        post: <T = any>(url: string, body?: any, headers?: Record<string, string>) => 
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'POST',
                url: url,
                body: body,
                headers:  headers,
            }).pipe(catchError(handleError)),
        put: <T = any>(url: string, body?: any, headers?: Record<string, string>) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'PUT',
                url: url,
                body: body,
                headers:  headers,
            }).pipe(catchError(handleError)),
        patch: <T = any>(url: string, body?: any, headers?: Record<string, string>) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'PATCH',
                url: url,
                body: body,
                headers:  headers,
            }).pipe(catchError(handleError)),
        delete: <T = any>(url: string, headers?: Record<string, string>) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                method: 'DELETE',
                url: url,
                headers:  headers,
            }).pipe(catchError(handleError)),
        ajax: <T = any>(request: AjaxRequestOption, headers?: any) =>
            ajax<T>({
                ...AjaxRequestOptionDefaultValue,
                ...request,
            }).pipe(catchError(handleError)),
    };
}