import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, apiData } from '../model/apiResponse.model';
import { PageMaster } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  // apiURL = 'http://docapi.brokersaathi.co.in/api/User/GetAllDoctorList'

  private token: string =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InBtQGJyb2tlcnNhYXRoaS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJQcm9wZXJ0eSBNYW5hZ2VtZW50IFBvcnRhbCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InBtQGJyb2tlcnNhYXRoaS5jb20iLCJleHAiOjE3MzY2ODMxNjUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA2OS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwNjkvIn0.gv0sa4O6ZUSxej1mXqvsjthU8ty_G92hDHlSAOenLLo';

  private headers = new HttpHeaders().set('Authorization', this.token);  


  singleDocterApiURL = 'api/User/GetDoctorListByUserId?UserId=126'
  doctorApiURL = 'api/User/GetAllDoctorList'; 
  patientApiURL = 'api/User/GetMyPatientListByDocId?';    // ?DocId=1235

  //Page Master API
  getAllMasterApiURL = 'api/PageMaster/GetAllPageMasterList';
  createPageMasterApiURL = 'api/PageMaster/CreatePageMaster';
  updatePageMasterApiURL = 'api/PageMaster/UpdatePageMaster?pageMasterId=';
  deletePageMasterApiURL = 'api/PageMaster/DeletePageMaster?pageMasterId='

  getAllDoctors(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.doctorApiURL)
  }

  getAllPatients(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.patientApiURL)
  }

  getSingleDocter(): Observable<ApiResponse<apiData[]>> {
    return this.http.get<ApiResponse<apiData[]>>(this.singleDocterApiURL)
  }

  getAllMasterAPI(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(this.getAllMasterApiURL, {
      headers:this.headers
    })
  }

  createPageMaster(page: PageMaster): Observable<PageMaster> {

    console.log(page);
    
    return this.http.post<PageMaster>(this.createPageMasterApiURL, page, {
      headers:this.headers
    });
  }

  updatePageMaster(id: number, data: PageMaster): Observable<PageMaster> {
    console.log('Data to Update :', data);

    return this.http.put<PageMaster>(`${this.updatePageMasterApiURL}${id}`, data, {
      headers: this.headers
    });
  }

  deletePageMaster(id: string): Observable<any> {
    return this.http.delete(`${this.deletePageMasterApiURL}${id}`, 
    {headers: this.headers}
    );}
  


}