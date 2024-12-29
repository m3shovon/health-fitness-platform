import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  difficulty: string; // e.g., Easy, Medium, Hard

  @ManyToOne(() => User, (user) => user.workouts, { onDelete: 'CASCADE' })
  user: User;
}
