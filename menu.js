import pg from "pg"
import readline from "readline-sync"
const {Pool} = pg 
import{creds} from "./creds.js"

const pool = new Pool(creds);
  



async function runQuery(query) {
return await pool.query(query)
}

while(true) {
    const answer = readline.question("Run what?")
    let query = ""
    let results = ""

    //1.select * from customers 
    //2. add a new customers 
    //3. update that customer 

    switch (answer) {
        case"1": 
        query = "SELECT  customer_id,first_name, last_name FROM customers"
        results= await runQuery(query)
        console.table(results.rows)
        break;
        case "2":
            query = `INSERT INTO customers(
                first_name, last_name, phone, email)
           VALUES ('Todd', 'Albert', '5615737773', 'todd@bocacode.com');`
           results  = await runQuery(query)
           console.log("customer added")
        break;
        case "3":
            query = 
            results = await runQuery(query)
            console.log("customer updated")
        break;
        default:
            console.log("ohh my!")
            break;
    }
}