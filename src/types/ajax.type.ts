export interface AjaxRequestOption {
	url: string;
	body?: any;
	method?: string;
	async?: boolean;
	headers?: Readonly<Record<string, any>>;
	timeout?: number;
	user?: string;
	password?: string;
	crossDomain?: boolean;
	withCredentials?: boolean;
	responseType?: XMLHttpRequestResponseType;
}