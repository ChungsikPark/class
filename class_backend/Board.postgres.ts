import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;
  @Column({ type: "text" })
  writer!: String;
  @Column({ type: "text" })
  title!: String;
  @Column({ type: "integer" })
  age!: number;
  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
