import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor(
        private http: HttpClient
    ) {}
    /**
     * replace $param with value
     * @param url string url
     * @param data object data
     */
    
    public ReplaceUrl(url: string, replace:string, replaceValue:string) {
        let urlReplace = url.replace(replace, replaceValue);
        return urlReplace;
    }

    public deleteData(url:string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        try{
            return this.http.delete(url,{headers,observe: 'response'}).subscribe(
                (response) => {
                    return response;
                },
                (error) => {
                    throw error;
                }
            )
        }catch(error){
            return `can not deleteData : ${error}`
        }
    }
    
    //this.http.post('localhost:1234/test')
    public postData(url:string ,reqBody: object) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        try{
            return this.http.post(url, reqBody, {headers,observe: 'response' }).subscribe(
                (response) => {
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
