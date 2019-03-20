export enum Param {
  Subject = "subject",
  Email = "email",
  Platform = "platform",
  Verb = "verb",
  Title = "title"
}

export enum Columns {
  Quiz = "quiz",
  Post = "post"
}

// ====================================================
// Documents
// ====================================================

export namespace QuizByVerb {
  export type Variables = {
    value: string;
  };

  export type Query = {
    __typename?: "Query";

    getQuiz: (GetQuiz | null)[] | null;
  };

  export type GetQuiz = {
    __typename?: "Quiz";

    score: number | null;

    title: string | null;

    activity: string | null;

    course: string | null;

    author: Author;
  };

  export type Author = {
    __typename?: "User";

    name: string | null;
    email: string | null;
  };
}

export namespace SentimentByPlatform {
  export type Variables = {
    name: string;
  };

  export type Query = {
    __typename?: "Query";

    searchNotes: (SearchNotes | null)[] | null;
  };

  export type SearchNotes = {
    __typename?: "Note";

    verb: string | null;

    title: string | null;

    text: string;

    courseRef: string | null;

    course: string | null;

    activityRef: string | null;

    activity: string | null;

    subjectRef: string | null;

    updatedAt: string | null;

    platform: string | null;

    author: Author | null;

    createdAt: string | null;

    sentiment: Sentiment | null;
  };

  export type Author = {
    __typename?: "User";

    name: string | null;

    email: string | null;

    role: string | null;
  };

  export type Sentiment = {
    __typename?: "Sentiment";

    neg: number | null;

    neu: number | null;

    compound: number | null;

    pos: number | null;
  };
}

export namespace SentimentByUser {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    searchNotes: (SearchNotes | null)[] | null;
  };

  export type SearchNotes = {
    __typename?: "Note";

    createdAt: string | null;

    sentiment: Sentiment | null;
  };

  export type Sentiment = {
    __typename?: "Sentiment";

    neg: number | null;

    neu: number | null;

    compound: number | null;

    pos: number | null;
  };
}

export namespace SocialDataByPlatform {
  export type Variables = {
    platform: string;
  };

  export type Query = {
    __typename?: "Query";

    searchNotes: (SearchNotes | null)[] | null;
  };

  export type SearchNotes = {
    __typename?: "Note";

    createdAt: string | null;
  };
}

export namespace SocialDataByUser {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    getNotesByUser: (GetNotesByUser | null)[] | null;
  };

  export type GetNotesByUser = {
    __typename?: "Note";

    createdAt: string | null;

    platform: string | null;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class QuizByVerbGQL extends Apollo.Query<
  QuizByVerb.Query,
  QuizByVerb.Variables
> {
  document: any = gql`
    query quizByVerb($value: String!) {
      getQuiz(search: verb, value: $value) {
        score
        activity
        course
        title
        author {
          name
          email
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class SentimentByPlatformGQL extends Apollo.Query<
  SentimentByPlatform.Query,
  SentimentByPlatform.Variables
> {
  document: any = gql`
    query sentimentByPlatform($name: String!) {
      searchNotes(search: platform, value: $name) {
        verb
        title
        text
        courseRef
        course
        activityRef
        activity
        subjectRef
        updatedAt
        platform
        author {
          name
          email
          role
        }
        createdAt
        sentiment {
          neg
          neu
          compound
          pos
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class SentimentByUserGQL extends Apollo.Query<
  SentimentByUser.Query,
  SentimentByUser.Variables
> {
  document: any = gql`
    query sentimentByUser($id: String!) {
      searchNotes(search: email, value: $id) {
        createdAt
        sentiment {
          neg
          neu
          compound
          pos
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class SocialDataByPlatformGQL extends Apollo.Query<
  SocialDataByPlatform.Query,
  SocialDataByPlatform.Variables
> {
  document: any = gql`
    query socialDataByPlatform($platform: String!) {
      searchNotes(search: platform, value: $platform) {
        createdAt
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class SocialDataByUserGQL extends Apollo.Query<
  SocialDataByUser.Query,
  SocialDataByUser.Variables
> {
  document: any = gql`
    query socialDataByUser($id: String!) {
      getNotesByUser(email: $id) {
        createdAt
        platform
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
