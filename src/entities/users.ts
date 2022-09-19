import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Contacts } from "./contacts";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 250,
  })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ length: 250 })
  @Exclude()
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany((type) => Contacts, (contacts) => contacts.user_id)
  contacts: Contacts[];
}
