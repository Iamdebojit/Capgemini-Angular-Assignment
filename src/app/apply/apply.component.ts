import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
  }

  name: string = "";
  course: string = "";
  joiningDate: Date = new Date("");
  courseDate: Date = new Date("");

  isTimeError: boolean = false;
  isNameError: boolean = false;
  isCourseError: boolean = false;
  isJoiningTimeError: boolean = false;
  isCourseTimeError: boolean = false;

  isSuccess: boolean = false;

  enrollCourse = () => {

    if (this.name == "")
      this.isNameError = true;
    else
      this.isNameError = false;

    if (this.course == "")
      this.isCourseError = true;
    else
      this.isCourseError = false;

    if (this.joiningDate.toString()=="Invalid Date")
      this.isJoiningTimeError = true;
    else
      this.isJoiningTimeError = false;

    if (this.courseDate.toString()=="Invalid Date")
      this.isCourseTimeError = true;
    else
      this.isCourseTimeError = false;

    if (this.joiningDate >= this.courseDate)
      this.isTimeError = true;
    else
      this.isTimeError = false;

    if (this.isNameError || this.isCourseError || this.isJoiningTimeError || this.isCourseTimeError || this.isTimeError)
      this.isSuccess = false;
    else
      this.isSuccess = true;
    
    if (this.isSuccess) {
      let temp = {
        Name: this.name, Course: this.course, JoiningDate: this.joiningDate, CourseDate: this.courseDate
      }
      this.data.courseList.push(temp)
      this.router.navigate(["/home"])
    }
  }
}
