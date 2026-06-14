-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access on reservations"
  ON reservations FOR SELECT
  TO anon
  USING (true);

-- Create policy for authenticated users to insert reservations
CREATE POLICY "Allow authenticated users to insert reservations"
  ON reservations FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to update reservations
CREATE POLICY "Allow authenticated users to update reservations"
  ON reservations FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy for authenticated users to delete reservations
CREATE POLICY "Allow authenticated users to delete reservations"
  ON reservations FOR DELETE
  TO authenticated
  USING (true);

-- Create index on date for faster filtering
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(date);

-- Insert sample data
INSERT INTO reservations (name, email, phone, date, time, guests, status) VALUES
  ('Sarah Wilson', 'sarah@example.com', '+1 234 567 8901', '2024-01-20', '7:00 PM', 4, 'confirmed'),
  ('Mike Davis', 'mike@example.com', '+1 234 567 8902', '2024-01-21', '6:30 PM', 2, 'pending'),
  ('Emily Chen', 'emily@example.com', '+1 234 567 8903', '2024-01-22', '8:00 PM', 6, 'confirmed')
ON CONFLICT DO NOTHING;
