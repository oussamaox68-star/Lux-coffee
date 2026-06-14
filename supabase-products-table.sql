-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  image TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Enable read access for all users"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policy to allow insert for authenticated users
CREATE POLICY "Enable insert for authenticated users"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow update for authenticated users
CREATE POLICY "Enable update for authenticated users"
  ON products FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy to allow delete for authenticated users
CREATE POLICY "Enable delete for authenticated users"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO products (name, description, price, image, category) VALUES
  ('Ethiopian Yirgacheffe', 'Floral and citrus notes with a bright finish', 14.99, NULL, 'Single Origin'),
  ('Colombian Supremo', 'Rich, full-bodied with caramel undertones', 12.99, NULL, 'Single Origin'),
  ('House Blend', 'Perfect balance of smooth and bold', 11.99, NULL, 'Blends'),
  ('Espresso Roast', 'Dark, intense, perfect for espresso drinks', 13.99, NULL, 'Dark Roast'),
  ('Cold Brew Blend', 'Smooth, low acidity, perfect for cold brewing', 15.99, NULL, 'Cold Brew'),
  ('Decaf Colombia', 'Full flavor without the caffeine', 13.99, NULL, 'Decaf'),
  ('Guatemala Antigua', 'Spicy and chocolatey with a smoky finish', 14.99, NULL, 'Single Origin'),
  ('Breakfast Blend', 'Light and bright to start your day', 10.99, NULL, 'Light Roast');
