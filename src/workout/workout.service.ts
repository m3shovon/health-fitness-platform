import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>, // Inject Workout Repository
  ) {}

  async getAllWorkouts(): Promise<Workout[]> {
    return this.workoutRepository.find(); // Fetch all workouts
  }

  async findOne(id: number): Promise<Workout | null> {
    return this.workoutRepository.findOneBy({ id });
  }

  async createWorkout(workout: Partial<Workout>): Promise<Workout> {
    const newWorkout = this.workoutRepository.create(workout);
    return this.workoutRepository.save(newWorkout);
  }

  async remove(id: number): Promise<void> {
    await this.workoutRepository.delete(id);
  }
}
