import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: String;
  @Column("text")
  seller!: String;
  @Column("text")
  name!: String;
  @Column("text")
  detail!: String;
  @Column("int")
  price!: Number;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
  @Column("timestamp", { default: null, nullable: true })
  deletedAt?: Date;
}
