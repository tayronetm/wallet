import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateOperationStock1599484173876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'operations',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',
							default: 'uuid_generate_v4()'
						},
						{
							name: 'code',
							type: 'varchar'
						},
						{
							name: 'quantity',
							type: 'float'
						},
						{
							name: 'currentValue',
							type: 'float'
						},
						{
							name: 'costPrice',
							type: 'float'
						},
						{
							name: 'type',
							type: 'varchar'
						},
						{
							name: 'date',
							type: 'timestamp',
							isNullable: true
						},
						{
							name: 'created_at',
							type: 'timestamp',
							default: 'now()'
						},
						{
							name: 'updated_at',
							type: 'timestamp',
							default: 'now()'
						}
					]
				})
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('operations');
    }

}
