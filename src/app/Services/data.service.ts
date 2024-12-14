import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ApiResponse, Doctor } from '../model/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // apiURL = 'http://docapi.brokersaathi.co.in/api/User/GetAllDoctorList'
  
  apiURL = '/api/User/GetAllDoctorList';  // using the local proxy path

  getAllDoctors(): Observable<ApiResponse<Doctor[]>>{
    return this.http.get<ApiResponse<Doctor[]>>(this.apiURL)
  }

}