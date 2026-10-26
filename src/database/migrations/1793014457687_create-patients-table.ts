import type { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('patients',{
        id: 'id',
        name: {type:'text', notNull: true},
        age: {type: 'integer', notNull: true},

    });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('patients');
}
