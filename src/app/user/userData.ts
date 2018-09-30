/* Export class for saving-retrieving User all Details*/
export class UserData {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    countryCode: string = '';
    countryName: string = ';'
    gender: string = '';
    maritalStatus: string ='';
    mobileNumber:number ;

    hobbies: string [] = [];

    childrens: any [] = [];  

    address: string = '';  

}

/* Export class for saving-retrieving User basic Details*/

export class BasicDetails {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    countryCode: string = '';
    countryName: string = ';'
    gender: string = '';
    maritalStatus: string ='';
    mobileNumber:number = 0;

}

/* Export class for saving-retrieving User Hobbies Details*/

export class HobbiesDetails {
    hobbies: string [] = [];
}

/* Export class for saving-retrieving User Childrens Details*/

export class ChildDetails {
    childrens: any [] = [];    
}

/* Export class for saving-retrieving User Address Details*/

export class AddressDetails {
    address: string = '';    
}

