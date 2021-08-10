import { Course } from './course';
import { Classroom } from 'src/app/classes/classroom';

export class Event{
  public id: number;
  public course: Course;
  public classroom: number;
  public day: string;

  public constructor(id: number, course: Course, classroom: number, day: string){
      this.id = id;
      this.course = course;
      this.classroom = classroom;
      this.day = day;
  }
}
