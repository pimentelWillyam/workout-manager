export const SQLiteQueries = {
  createDatabaseIfDoesNotExists: 'CREATE DATABASE IF NOT EXISTS ?',
  createUserTableIfDoesNotExists: `CREATE TABLE IF NOT EXISTS user (
    id  INT PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    current_pushup_level INT NOT NULL,
    current_pullup_level INT NOT NULL,
    current_situp_level INT NOT NULL,
    current_squat_level INT NOT NULL,
    tracking_pushups INT NOT NULL,
    tracking_pullups INT NOT NULL,
    tracking_situps INT NOT NULL,
    tracking_squats INT NOT NULL,
  );`,
  insertUserRegistry: `INSERT INTO user (name, current_pushup_level, current_pullup_level, current_situp_level, current_squat_level, tracking_pushups, tracking_pullups, tracking_situps, tracking_squats)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
  fetchEveryUserRegistry: `SELECT * FROM user;`,
  fetchUserById: `SELECT * FROM sua_tabela WHERE id = ?;`,
  updateUserRegistry: `UPDATE user
  SET 
      name = ?,
      current_pushup_level = ?,
      current_pullup_level = ?,
      current_situp_level = ?,
      current_squat_level = ?,
      tracking_pushups = ?,
      tracking_pullups = ?,
      tracking_situps = ?,
      tracking_squats = ?
  WHERE
      id = ?;`,
  deleteUserRegistry: 'DELETE FROM sua_tabela WHERE id = ?;'

}