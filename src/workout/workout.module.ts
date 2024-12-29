import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './workout.entity';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])], // Register Workout entity
  providers: [WorkoutService],
  controllers: [WorkoutController],
  exports: [WorkoutService], // Export if needed in other modules
})
export class WorkoutModule {}
