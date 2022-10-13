import pg from "pg"
const {Client,Pool} = pg

const pool = new Pool(
    {
        host: "sql.bocacode.com",
        database: "bocacode",
        user: "bocacode",
        password: "bocacode",
        port: 5432
    }
)

const query = `
SELECT * FROM 
customers order by
customers.customerid`


pool.query(query, (err,data) => {
    if (err) {
        console.log(err)
        return
    }
    console.table(data.rows)
    pool.end()

})