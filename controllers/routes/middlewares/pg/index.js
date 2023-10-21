import "dotenv/config"
import pg from "pg";
const { Pool } = pg;

export const botanicalDB = new Pool ({
    user: process.env.BOTANICAL_USER,
    host: process.env.BOTANICAL_HOST,
    database: process.env.BOTANICAL_DATABASE,
    password: process.env.BOTANICAL_PASSWORD,
    port: process.env.BOTANICAL_PORT
});

export const pgGetAll = (method, path) => {
    return (req, res) => {
        console.log(req.ip);
        try {
            botanicalDB.query("SELECT * FROM botanical_entry", (error, result) => {
                if (error) throw error;
                res.send(result.rows);
            })
        } catch {
            console.log(`Error @ ${path}`)
        } finally {
            console.log(`${method} ${path} complete`)
        }
    };
}