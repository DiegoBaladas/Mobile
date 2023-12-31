import { Injectable } from '@angular/core';
import { getJSON, request } from '@nativescript/core/http';
const sqlite = require("nativescript-sqlite");

@Injectable()
export class NoticiasService {

    private noticias: Array<string> = [];


    api: string = "https://5043-190-53-249-158.ngrok-free.app/";

    constructor() {
        this.getDb((db) => {
            console.dir(db);
            db.each("Select * from logs",
                (err, fila) => console.log("fila", fila),
                (err, totales) => console.log("Filas totales: ", totales))
        }, () => console.log("error on getDB"));
    }

    getDb(fnOk, fnError) {
        return new sqlite("mi_db_logs", (err, db) => {
            if(err) {
                console.error("Error al abrir la DB!", err);
            }else {
                console.log("Esta la base de datos abierta carnal: ", db.isOpen() ? "Si" : "No");
                db.execSQL("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)")
                .then((id) => {
                    console.log("CREATE TABLE OK");
                    fnOk(db);
                }, (error) => {
                    console.log("CREATE TABLE ERROR", error);
                    fnError(error);
                });
            }
        });
    }


    agregar(s: string) {
        return request({
            url: this.api + "/favs",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                nuevo: s
            })
        });

    }

    favs() {
        return getJSON(this.api + "/favs");
    }

    // buscar(s: string) {
    //     return getJSON(this.api + "/get?q=" + s);
    // }

    buscar(s: string) {
        this.getDb((db) => {
            db.execSQL("insert into logs (text) values (?)", [s], 
            (err, id) => console.log("nuevo id: ", id));
        }, () => console.log("error on getDB"));
        return getJSON(this.api + "/get?q=" + s);
    }


}
