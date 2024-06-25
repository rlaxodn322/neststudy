// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { BoardsModule } from './boards/boards.module';

// @Module({
//   imports: [BoardsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostModule } from './post/post.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'my-blog.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    PostModule
  ]
})
export class AppModule {}
