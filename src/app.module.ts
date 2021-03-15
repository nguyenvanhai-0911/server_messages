import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
         requireResolversForResolveType: false,
      }
    }),
    MessagesModule
  ],

})
export class AppModule {}
