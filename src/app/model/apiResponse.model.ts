export interface Doctor {
    slNo: number;
    userId: number;
    clinicName: string;
    uName: string;
    uEmailId: string;
    uMobileNo: string;
    userInfoId: number;
    profileImagesUrl: string;
    imaNumber: string;
    experience: string;
    completeAddress: string;
    ratingValue: number;
    roleId: number;
    roleName: string;
    age: number;
    gender: number;
    genderValue: string;
    docId: number;
    doctorAmount: number;
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
  }
  
  export interface ApiResponse<T> {
    ok: boolean;
    message: string;
    data: T;
  }
  