import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"

@Resolver()

export class MessagesResolver {
    messagesThatReallyShouldBeInADb = [
        {id: 0, description: 'The seen message!' },
        {id: 1, description: 'Another 1!' },
    ];

    @Query('messages')
    getMessages(){
        return this.messagesThatReallyShouldBeInADb;
    }

    @Mutation()
    createMessage(@Args('description') description: string){
        const id = this.messagesThatReallyShouldBeInADb.length;
        const newMessage = {id, description};
        this.messagesThatReallyShouldBeInADb.push(newMessage);
        return newMessage;
    }
}
