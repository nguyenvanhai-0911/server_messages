import { MessagesResolver } from './messages.resolver';
import { Module } from '@nestjs/common';

@Module({
    providers: [MessagesResolver],
    exports: [MessagesResolver],
})
export class MessagesModule {}
