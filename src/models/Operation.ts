import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('operations')
class OperationStock {

	@PrimaryGeneratedColumn('uuid')
  id: string;

	@Column()
  code: string;

	@Column()
	quantity: number;

	@Column()
	currentValue: number;

	@Column()
	costPrice: number;

	@Column()
	date: Date;

	@Column()
	type: string
	
  @CreateDateColumn()
  created_at: Date;

	@UpdateDateColumn()
  updated_at: Date;
}

export default OperationStock;
