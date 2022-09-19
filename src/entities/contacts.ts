import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./users";

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 250,
  })
  full_name: string;

  @Column()
  email: string;

  @Column({ length: 15 })
  phone: string;

  @ManyToOne((type) => Users, (users) => users.id)
  user_id: string;
}
