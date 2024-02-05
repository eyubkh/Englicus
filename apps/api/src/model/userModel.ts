import { connect } from "bun";
import mysql from "mysql2/promise";

export class UserModel {
	static async create() {
		const connection = await mysql.createConnection(
			`${process.env.PSCALE_DB_URL}`,
		);

		const [rawData] = await connection.execute(
			`INSERT INTO user () VALUES ();`,
		);

		const [user] = await connection.execute(
			`SELECT bin_to_uuid(user_id) as user_id FROM user WHERE user_pk = ?;`,
			[rawData.insertId],
		);

		connection.end();

		const id = user[0].user_id;

		return { id };
	}

	static async getUser({ id }: { id: string }) {
		const connection = await mysql.createConnection(
			`${process.env.PSCALE_DB_URL}`,
		);

		const [user] = await connection.execute(
			`SELECT bin_to_uuid(user_id) as user_id, motivation, welcome_completed FROM user WHERE user_id = uuid_to_bin(?);`,
			[id],
		);
		connection.end();

		console.log(user);

		return { user: user[0] };
	}
}
