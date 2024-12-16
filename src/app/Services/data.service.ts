import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, apiData } from '../model/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // apiURL = 'http://docapi.brokersaathi.co.in/api/User/GetAllDoctorList'

  singleDocterApiURL = '/api/User/GetDoctorListByUserId?UserId=126'

  doctorApiURL = '/api/User/GetAllDoctorList';  // using the local proxy path

  patientApiURL = 'api/User/GetMyPatientListByDocId?';    // ?DocId=1235

  getAllDoctors(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.doctorApiURL)
  }

  getAllPatients(): Observable<ApiResponse<apiData[]>>{
    return this.http.get<ApiResponse<apiData[]>>(this.patientApiURL)
  }

  getSingleDocter(): Observable<ApiResponse<apiData[]>> {
    return this.http.get<ApiResponse<apiData[]>>(this.singleDocterApiURL)
  }

}