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

	static async returnUserInfoById(userId: string) {
		const connection = await mysql.createConnection(
			`${process.env.PSCALE_DB_URL}`,
		);

		const [userData] = await connection.execute(
			`SELECT bin_to_uuid(user_id) as user_id, motivation, welcome_completed 
			FROM user 
			WHERE user_id = uuid_to_bin(?);`,
			[userId],
		);
		connection.end();

		return userData[0];
	}

	static async updateUser(userId: string, body: any) {
		const { motivation, welcome_completed } = body;

		const connection = await mysql.createConnection(
			`${process.env.PSCALE_DB_URL}`,
		);

		console.log(welcome_completed);

		if (welcome_completed) {
			await connection.execute(
				`UPDATE user SET welcome_completed = ? WHERE user_id = uuid_to_bin(?) `,
				[welcome_completed, userId],
			);
		}

		if (motivation) {
			const [motivationData] = await connection.query(
				`SELECT motivation_pk FROM motivation WHERE motivation_type = ?`,
				[motivation],
			);

			const motivationId = motivationData[0].motivation_pk;

			if (motivationId) {
				await connection.execute(
					`UPDATE user SET motivation = ? WHERE user_id = uuid_to_bin(?) `,
					[motivationId, userId],
				);
			}
		}

		const [userData] = await connection.execute(
			`SELECT bin_to_uuid(user_id) as user_id, motivation, welcome_completed 
				FROM user 
				WHERE user_id = uuid_to_bin(?);`,
			[userId],
		);

		connection.end();

		return userData[0];
	}
}
