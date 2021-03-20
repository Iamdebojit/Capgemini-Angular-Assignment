import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  courseList = [
    {
      Name: "Ram", Course:"MEAN", 
      JoiningDate: new Date("2020-05-18") , 
      CourseDate: new Date("2020-05-27") 
    },
    {
      Name: "Sam", Course:"MERN", 
      JoiningDate: new Date("2020-05-18") , 
      CourseDate: new Date("2020-05-27") 
    },
    {
      Name: "Jim",Course:"Vue", 
      JoiningDate: new Date("2020-05-18") , 
      CourseDate: new Date("2020-05-27") 
    },
  ]
}
