import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestService {
    constructor(
        private http: HttpClient
    ) {}
    /**
     * replace $param with value
     * @param url string url
     * @param data object data
     * @returns string url with replace value
     */
    ReplaceUrl(url: string, data: any) {
        let urlReplace = url.replace('$username', data.username);
        return urlReplace;
    }

    //this.http.post('localhost:1234/test')
    public postData(url:string ,reqBody: object) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        try{
            return this.http.post(url, reqBody, {headers,observe: 'response' }).subscribe(
                (response) => {
                    console.log('Request successful', response);
                    return response;
                },
                (error) => {
                    throw error;
                }
            )
        }catch(error){
            return `can not postData : ${error}`
        }
    }

    public getData(url:string){

    }
}
