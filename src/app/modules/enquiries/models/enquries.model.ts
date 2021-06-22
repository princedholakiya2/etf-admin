export interface IEnquiries {
    studentInformation?: StudentInformation;
    studentParentsOneInformation?: StudentParentsOneInformation;
    studentParentsTwoInformation?: StudentParentsTwoInformation;
    _id: string;
    is_deleted: boolean;
    created_by: string;
    updated_by: string;
    updated_datetime: string;
    __v: number;
}

export interface StudentInformation {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    contactNo: number;
    address: string;
    country: string;
    state: string;
    city: string;
    landmark: string;
    email: string;
    schoolName: string;
    schoolState: string;
    schoolCity: string;
    tutionName: string;
    standard: string;
    previousYearResult: string;
    totalMarks: string;
    scienceMarks: string;
    mathsMarks: string;
    englishMarks: string;
    intrestedField: string;
    hobbyOfChildhood: string;
    occupation: string;
    companyName: string;
}

export interface StudentParentsOneInformation {
    firstName: string;
    middleName: string;
    lastName: string;
    contactNo: number;
    address: string;
    schoolName: string;
    schoolState: string;
    schoolCity: string;
    standard: string;
    occupation: string;
    intrestedField: string;
    companyName: string;
}

export interface StudentParentsTwoInformation {
    MotherFirstName: string;
    MotherMiddleName: string;
    MotherLastName: string;
    MarriageAfterState: string;
    MarriageAfterCity: string;
    schoolName: string;
    schoolState: string;
    schoolCity: string;
    standard: string;
    totalMarks: string;
    occupation: string;
    intrestedField: string;
    companyName: string;
}
