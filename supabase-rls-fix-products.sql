SELECT COUNT(*) FROM products;

DROP POLICY IF EXISTS "Enable read access for all users" ON products;
DROP POLICY IF EXISTS "Enable read for all users" ON products;
DROP POLICY IF EXISTS "Public read access" ON products;

CREATE POLICY "Allow public read access"
ON products
FOR SELECT
TO public
USING (true);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
