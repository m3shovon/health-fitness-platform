import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Workout } from 'src/workout/workout.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 'user' })
  role: string; // 'user' or 'admin'

  @Column({ nullable: true })
  avatarUrl: string;

  @OneToMany(() => Workout, (workout) => workout.user)
  workouts: Workout[];
}
