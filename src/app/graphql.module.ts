import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RuntimeConfig } from 'src/app/config/runtime.config';

export function createApollo(httpLink: HttpLink, runtimeConfig: RuntimeConfig) {
  return {
    link: httpLink.create({ uri: runtimeConfig.graphqlUri }),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, RuntimeConfig]
    }
  ]
})
export class GraphQLModule {}
