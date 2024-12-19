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

  // https://uatapi.brokersaathi.in/api/PageMaster/GetAllPageMasterList
  

  singleDocterApiURL = '/api/User/GetDoctorListByUserId?UserId=126'

  doctorApiURL = '/api/User/GetAllDoctorList';  // using the local proxy path

  patientApiURL = 'api/User/GetMyPatientListByDocId?';    // ?DocId=1235

  createDocterApiURL = 'api/User/CreateDoctor';

  //Page Master API

  getAllMasterApiURL = 'api/PageMaster/GetAllPageMasterList';
  
  createPageMasterApiURL = 'api/PageMaster/CreatePageMaster'

  getAllDoctors(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.doctorApiURL)
  }

  getAllPatients(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.patientApiURL)
  }

  getSingleDocter(): Observable<ApiResponse<apiData[]>> {
    return this.http.get<ApiResponse<apiData[]>>(this.singleDocterApiURL)
  }


  // Master API
  getAllMasterAPI(): Observable<ApiResponse<any[]>> {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InBtQGJyb2tlcnNhYXRoaS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJQcm9wZXJ0eSBNYW5hZ2VtZW50IFBvcnRhbCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InBtQGJyb2tlcnNhYXRoaS5jb20iLCJleHAiOjE3MzY2ODMxNjUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA2OS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwNjkvIn0.gv0sa4O6ZUSxej1mXqvsjthU8ty_G92hDHlSAOenLLo'
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get<ApiResponse<any[]>>(this.getAllMasterApiURL, {
      headers
    })
  }

  createPageMaster(page: PageMaster): Observable<PageMaster> {
    return this.http.post<PageMaster>(this.createPageMasterApiURL, page);
  }
  


}