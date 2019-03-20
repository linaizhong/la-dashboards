import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QuizByVerbGQL, SentimentByPlatformGQL } from 'src/app/graphql';





@Injectable({
  providedIn: 'root'
})
export class LaApiService {

  constructor(
    private qvql: QuizByVerbGQL,
    private notesByActivity: SentimentByPlatformGQL
  ) {

  }

  public getQuizByV(value?: string) {
    return this.qvql.watch({
      value: "completed"
    }).valueChanges.pipe(
      map(result => result.data),
      map(x => x.getQuiz.map(z => ({
        course: z.course,
        activity: z.activity,
        name: z.author.name,
        email:z.author.email,
        value: z.score

      }))))

  }

  public fetchActivityUser(value?: string) {
    return this.notesByActivity.watch({
      name: "Canvas"
    }).valueChanges.pipe(
      map(result => result.data),
      map(x => x.searchNotes.map(z => ({
        course: z.course,
        activity: z.activity,
        name: z.author.name,
        email:z.author.email
      }))))

  }



}
