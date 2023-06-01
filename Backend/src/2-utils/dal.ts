import mysql from "mysql";
import appConfig from "./app-config";

const connection = mysql.createPool({
    host: appConfig.mysqlHost,
    user: appConfig.mysqlUser,
    password: appConfig.mysqlPassword,
    database: appConfig.mysqlDatabase
});

function execute(sql: string, ...values: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    execute
};