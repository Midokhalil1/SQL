-- select productionname,customerid from orders 
-- where 
-- customerid = 2 
-- AND 
-- create_time > '2022-01-01';

--select * from orders where customerid !=2
-- select * from customers 
-- inner join orders on customers.customerid = orders.customerid

-- select * from customers 
-- left join orders on customers.customerid = orders.customerid

SELECT * FROM customers inner join  orders on customers.customerid = orders.customerid -- everything matching
SELECT * FROM customers full  join  orders on customers.customerid = orders.customerid -- all 
SELECT * FROM customers left  join  orders on customers.customerid = orders.customerid -- care about customers only
SELECT * FROM customers right join  orders on customers.customerid = orders.customerid -- care about orders only

insert into orders (create_time,productionname,customerid) values ('2022-10-22','iphone',5)

order by customerid



-- select * from customers

Update customers set name ='Mido :-) ;-)' where customerid = 2
