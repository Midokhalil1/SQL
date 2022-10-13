UPDATE public.customers
	SET first_name='HACK', 
	last_name='HACK',
--	email=?, phone=?, 
-- 	created_at=?, 
	updated_at=NOW()
	WHERE customer_id=1;