import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SentimentByUserGQL, SocialDataByPlatformGQL, SocialDataByUserGQL } from 'src/app/graphql';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(
    private sentimentByUserGQL: SentimentByUserGQL,
    private socialDataByUserGQL: SocialDataByUserGQL,
    private socialDataByPlatformGQL: SocialDataByPlatformGQL
  ) {}

  public getSentimentByUser(id?: string) {
    return this.sentimentByUserGQL
      .watch({
        id: 'example@example.com'
      })
      .valueChanges.pipe(
        map(sentiment => sentiment.data),
        map(x =>
          x.searchNotes.map(z => ({
            name: z.createdAt,
            series: [
              { name: 'neg', value: z.sentiment.neg },
              { name: 'neu', value: z.sentiment.neu },
              { name: 'pos', value: z.sentiment.pos }
            ]
          }))
        )
      );
  }

  public getSocialDataByUser(id?: string) {
    return this.socialDataByUserGQL
      .watch({
        id: 'example@example.com'
      })
      .valueChanges.pipe(map(social => social.data));
  }

  public getSocialDataByPlatform(platform?: string) {
    return this.socialDataByPlatformGQL
      .watch({
        platform: 'Canvas'
      })
      .valueChanges.pipe(
        map(social => social.data),
        map(x => [
          {
            name: 'Canvas',
            series: x.searchNotes
              .sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
              })
              .map(y => ({
                name: new Date(y.createdAt),
                value: new Date(y.createdAt)
              }))
          }
        ])
      );
  }
}
