import { Component, OnInit } from '@angular/core';
import { LaApiService } from "./la-api.service";

@Component({
  selector: 'app-canvas-course',
  templateUrl: './canvas-course.component.html',
  styleUrls: ['./canvas-course.component.scss']
})
export class CanvasCourseComponent implements OnInit {

  public quizzes: any;
  public ontask: any;
  public students: any;
  public headerElement: any;
  public activities: any;

  displayedColumns: string[] = ['email', 'activity', 'value'];

  constructor(private LaService: LaApiService) {

  }

  ngOnInit() {
    //this.data = this.getQuizByVerb();
   this.LaService.getQuizByV().subscribe((res) => {
      this.assignValues(res);
    });


  }

  /*public getQuizByVerb() {
    return  this.LaService.getQuizByV().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }*/

  public  assignValues (data ){
    this.quizzes = data;
    const courses = [];
    const activities = [];
    const students = [];

    data.forEach( (data) => {
      if(data.course === '36103 Spring 2018 - Statistical Thinking for Data Science') {
        if (activities.indexOf(data.activity) === -1) {
          activities.push(data.activity);
        }
      }
    });
    //console.log(activities);

    data.forEach( (data) => {
      if (students.indexOf(data.email) === -1) {
        if(data.email.indexOf('@') !== -1) students.push(data.email);
      }
    });

    let cdata = students.map( (v) => {
      let act = activities.map ( (ac) => {
          let vals = data.find( (r) => (r.email === v && r.activity === ac));
          let score = (typeof vals === 'undefined') ? '-' : vals.value.toFixed(2);
          return {qname: ac, score: score};
      });
      return {email: v, grid: act};
    });

   /*students.forEach( (stu) => {
     activities.forEach( (act) => {
       data.forEach( (d) => {
         if (d.email === stu && d.activity === act && this.find())
       });

     });
   });*/


    this.students = students;
    this.activities = activities;
    this.ontask = cdata;



  }

}
