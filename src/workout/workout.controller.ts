/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkoutService } from './workout.service';

@Controller('workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  async getAllWorkouts() {
    return this.workoutService.getAllWorkouts();
  }

  @Post()
  async createWorkout(@Body() workoutDto: any) {
    return this.workoutService.createWorkout(workoutDto);
  }
}
