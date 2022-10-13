-- select * from customers

UPDATE public.customers
	SET first_name='damian', 
	last_name='montero',
--	email=?, phone=?, 
-- 	created_at=?, 
	updated_at=NOW()
	WHERE customer_id=1;
	
	select * from customers 