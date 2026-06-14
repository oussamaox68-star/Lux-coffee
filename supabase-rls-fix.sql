-- Enable Row Level Security on products table
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable read access for all users" ON products;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON products;
DROP POLICY IF EXISTS "Allow public read" ON products;

-- Create policy to allow public read access for anonymous users
CREATE POLICY "Allow public read"
ON products
FOR SELECT
TO anon, authenticated
USING (true);

-- Create policy to allow insert for authenticated users
CREATE POLICY "Allow insert for authenticated users"
ON products
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policy to allow update for authenticated users
CREATE POLICY "Allow update for authenticated users"
ON products
FOR UPDATE
TO authenticated
USING (true);

-- Create policy to allow delete for authenticated users
CREATE POLICY "Allow delete for authenticated users"
ON products
FOR DELETE
TO authenticated
USING (true);
