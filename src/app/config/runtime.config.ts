export class RuntimeConfig {
  environment: string; // 'development' or 'production'
  graphqlUri: string;

  constructor(data: any) {
    this.environment = data.environment;
    this.graphqlUri = data.graphqlUri;
  }
}
