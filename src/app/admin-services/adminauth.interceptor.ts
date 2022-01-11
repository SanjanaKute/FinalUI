import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminloginService } from "./adminlogin.service";

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor{
    constructor(private adminloginService:AdminloginService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let tokens= this.adminloginService.getToken()
        console.log("INTERCEPTOR", tokens);
        
        if(tokens!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${tokens}`}})
        }
        return next.handle(newReq)
    }

    
    
}