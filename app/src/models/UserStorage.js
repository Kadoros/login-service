"use strict";

const db = require("../config/db");

class UserStorage {
    static getUsers(isAll,...fields) {
           
    }

    static getUserInfo(id){
        return new Promise ((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                console.log(data[0]);
                resolve(data[0]);
            });
        });
        
    }

    

    static async save(userInfo) {
        return new Promise ((resolve, reject) => {
            const query = "INSERT INTO users(id,psword,email) VALUES(?,?,?);";
            db.query(
                query, 
                [userInfo.id,userInfo.psword,userInfo.email], 
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;