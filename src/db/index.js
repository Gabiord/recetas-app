import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("sessions.db");

export const init = () => {
  console.log("init")
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, displayName TEXT NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertSession = ({localId,displayName, email, token }) => {
  const promise = new Promise((accept, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessions (localId, displayName, email, token) VALUES (?, ?, ?, ?);",
        [localId, displayName, email, token],
        (_, result) => accept(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  console.log("fetching")
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  console.log("delete")
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

  return promise;
};