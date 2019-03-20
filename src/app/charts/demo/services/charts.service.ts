import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SentimentByUserGQL, SocialDataByPlatformGQL, QuizByVerbGQL, SentimentByPlatformGQL } from 'src/app/graphql';

@Injectable({
	providedIn: 'root'
})
export class ChartsDemoService {
	constructor(
	private sentimentByUserGQL: SentimentByUserGQL,
	private socialDataByPlatformGQL: SocialDataByPlatformGQL,
	private quizByVerbGQL: QuizByVerbGQL,
	private quizByVerbForTest1GQL: QuizByVerbGQL,
	private quizByVerbForTest2GQL: QuizByVerbGQL,
	private quizByVerbForTest3GQL: QuizByVerbGQL,
	private quizByVerbForTest4GQL: QuizByVerbGQL,
	private quizScoreGQL: QuizByVerbGQL,
	private sentimentByPlanformGQL1: SentimentByPlatformGQL,
	private sentimentByPlanformGQL2: SentimentByPlatformGQL
	) {}
	
	
	public getQuizByVerb(value?: string) {
		return this.quizByVerbGQL.watch({
		value: "completed"
		}).valueChanges.pipe(
		map(result => result.data),
		map(x => x.getQuiz.map(z => ({
			name: z.title,
			series: [{
				name: z.author.name, value: z.score
			}]
		}))))
				
	}
	
	public getQuizByVerbForTest1(value?: string) {
		
		class avg {
			title: string;
			sum: number;
			total: number;
			author: string;
		}
			
		let avgSc: avg[] = [];
		
		return this.quizByVerbForTest1GQL.watch({
		value: "completed"
		}).valueChanges.pipe(
		map(result => result.data),
		map(x => x.getQuiz.map(z => {
			let i: number;
			for(i = 0; i < avgSc.length; i++) {
				if(z.title == avgSc[i].title) {
					avgSc[i].sum += z.score;
					avgSc[i].total++;
					break;
				}
			}
			if(i == avgSc.length) {
				let newVal: avg = {
					title: z.title,
					sum: z.score,
					total: 1,
					author: z.author.name
				}	
				avgSc.push(newVal);
			}
			

			avgSc.map(q => ({
				name: q.title,
				series: [{
					name: q.title,
					value: q.sum / q.total
				}]	
			}));
			return avgSc;
		})),
		map(x => x[x.length - 1]),
		map(x => [{
			name: "Avarage",
			series: x.map(z => ({
				name: z.title,
				value: z.sum / z.total
		}))}])
	)
			
				
	}
	
	public getQuizByVerbForTest2(value?: string) {
		
		class avg {
			title: string;
			sum: number;
			total: number;
			author: string;
		}
			
		let avgSc: avg[] = [];
		
		return this.quizByVerbForTest2GQL.watch({
		value: "completed"
		}).valueChanges.pipe(
		map(result => result.data),
		map(x => x.getQuiz.map(z => {
			let i: number;
			for(i = 0; i < avgSc.length; i++) {
				if(z.title == avgSc[i].title) {
					avgSc[i].sum += z.score;
					avgSc[i].total++;
					break;
				}
			}
			if(i == avgSc.length) {
				let newVal: avg = {
					title: z.title,
					sum: z.score,
					total: 1,
					author: z.author.name
				}	
				avgSc.push(newVal);
			}
			

			avgSc.map(q => ({
				name: q.title,
				series: [{
					name: q.title,
					value: q.sum / q.total
				}]	
			}));
			return avgSc;
		})),
		map(x => x[x.length - 1].map(z => ({
			name: z.title,
			series: [{
				name: z.title,
				value: z.sum / z.total
			}]
		}))));
				
	}
	
	public getQuizByVerbForTest3(value?: string) {
		
		class avg {
			title: string;
			sum: number;
			total: number;
			author: string;
		}
			
		let avgSc: avg[] = [];
		
		return this.quizByVerbForTest3GQL.watch({
		value: "completed"
		}).valueChanges.pipe(
		map(result => result.data),
		map(x => x.getQuiz.map(z => {
			let i: number;
			for(i = 0; i < avgSc.length; i++) {
				if(z.author.name == avgSc[i].author) {
					avgSc[i].sum += z.score;
					avgSc[i].total++;
					break;
				}
			}
			if(i == avgSc.length) {
				let newVal: avg = {
					title: z.title,
					sum: z.score,
					total: 1,
					author: z.author.name
				}	
				avgSc.push(newVal);
			}
			

			avgSc.map(q => ({
				name: q.author,
				series: [{
					name: "",
					value: q.sum / q.total
				}]	
			}));
			return avgSc;

			
		})),
		map(x => x[x.length - 1].map(z => ({
			name: z.author,
			series: [{
				name: z.author,
				value: z.sum / z.total
			}]
		}))));
	}
	

	public getQuizByVerbForTest4(value?: string) {
		
		class avg {
			title: string;
			sum: number;
			total: number;
			author: string;
			max: number;
		}
			
		let avgSc: avg[] = [];
		
		return this.quizByVerbForTest4GQL.watch({
		value: "completed"
		}).valueChanges.pipe(
		map(result => result.data),
		map(x => x.getQuiz.map(z => {
			
			if(z.author.name == "Mark Brackenrig") {
				let i: number;
				for(i = 0; i < avgSc.length; i++) {
					if(z.title == avgSc[i].title) {
						if(avgSc[i].max < z.score) {
							avgSc[i].max = z.score
						}
						avgSc[i].sum += z.score;
						avgSc[i].total++;
						break;
					}
				}
				if(i == avgSc.length) {
					let newVal: avg = {
						title: z.title,
						sum: z.score,
						total: 1,
						author: z.author.name,
						max: z.score
					}	
					avgSc.push(newVal);
				}
				

				avgSc.map(q => ({
					name: q.author,
					series: [{
						name: q.title,
						value: q.max
					}]	
				}));
			}
			return avgSc;
			
		})),
		map(x => x[x.length - 1].map(z => ({
			name: z.title,
			series: [{
				name: z.title,
				value: z.max
			}]
		}))));
	}
	
	
	
	public getQuizScore(value?: string) {
			return this.quizScoreGQL.watch({
				value: "completed"
				}).valueChanges.pipe(
				map(result => result.data),
				map(x => x.getQuiz.map(z => ({
					name: z.author.name,
					value: z.score
			}))))
	}

	public getSentimentByPlatform1(name?: string) {
		
		class avgSent {
			title: string;
			//parentName: string;
			createdAt: string;
			authorName: string;
			compoundSum: number;			
			total: number;
		}
				
			let avgSentSt: avgSent[] = [];
		
		return this.sentimentByPlanformGQL1
			.watch({
				name: 'Canvas'
			})
			.valueChanges.pipe(
				map(sentiment => sentiment.data),
				map(x =>
					x.searchNotes.map(z => {
			let i: number;
			for(i = 0; i < avgSentSt.length; i++) {
				if(z.author.name == avgSentSt[i].authorName) {
					avgSentSt[i].compoundSum += z.sentiment.compound;
					avgSentSt[i].total++;
					break;
				}
			}
			
			if(i == avgSentSt.length) {
				let newVal: avgSent = {
					title: z.title,
					//parentName: z.parentName,
					createdAt: z.createdAt,
					authorName: z.author.name,
					compoundSum: z.sentiment.compound,
					total: 1		
				}
				avgSentSt.push(newVal);
			}
			avgSentSt.map(q => ({
				name: q.authorName,
				series: [{
					name: "Compound",
					value: q.compoundSum / q.total
				}]	
			}));
			
			return avgSentSt;
			
		})),
		map(x => x[x.length - 1].map(z => ({
		name: z.title,
		series: [{
			name: z.title,
			value: Math.abs(z.compoundSum) / z.total
		}]
		}))));
	}
			
			
	public getSentimentByPlatform2(name?: string) {
		class overallSent {
			title: string;
			//parentName: string;
			createdAt: string;
			authorName: string;
			pos: number;		
			neg: number;	
			neu:number;			
		}
				
		let overallSentSt: overallSent[] = [];
		
		return this.sentimentByPlanformGQL2
			.watch({
				name: 'Canvas'
			})
			.valueChanges.pipe(
				map(sentiment => sentiment.data),
				map(x =>
					x.searchNotes.map(z => {
						if(z.author.name == "First Last" && z.createdAt > "2018-06-09" && !(z.sentiment.pos == 0 && z.sentiment.neg == 0 && z.sentiment.neu == 0)) {
							let newVal: overallSent = {
								title: z.title,
								//parentName: z.parentName,
								createdAt: z.createdAt,
								authorName: z.author.name,
								pos: z.sentiment.pos,
								neg: z.sentiment.neg,
								neu: z.sentiment.neu	
							}
							overallSentSt.push(newVal);
						}
						overallSentSt.map(q => ({
							name: q.createdAt,
							series: [
								{ name: 'neg', value: q.neg },
								{ name: 'neu', value: q.neu },
								{ name: 'pos', value: q.pos }
				
							]	
						}));
						overallSentSt.sort((a, b) => {
							if(a.createdAt < b.createdAt) return -1;
							if(a.createdAt == b.createdAt) return 0;
							if(a.createdAt > b.createdAt) return 1;
						});
			
						return overallSentSt;

			})),
			map(x => x[x.length - 1].map(z => ({
				name: z.createdAt,
				series: [
					{ name: 'positive', value: z.pos },
					{ name: 'negative', value: z.neg },
					{ name: 'neutral', value: z.neu }
				]
			}))));
				
	}
	
	
	public getSentimentByUser(id?: string) {
		return this.sentimentByUserGQL
			.watch({
				id: 'kirsty.kitto@uts.edu.au'
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
