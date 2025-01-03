import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export if needed in other modules
})
export class UsersModule {}
