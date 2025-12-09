-- ============================================
-- XPharm Supabase Database Schema
-- ============================================
-- This file contains the SQL to set up your Supabase database
-- Run this in Supabase Dashboard → SQL Editor → New Query
-- ============================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================
-- Stores contact form submissions from the website
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- ============================================
-- ROW LEVEL SECURITY (RLS) FOR CONTACT SUBMISSIONS
-- ============================================
-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for public contact form)
CREATE POLICY "Anyone can submit contact form"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only authenticated users can view submissions
-- NOTE: After you create your first admin user, update this policy
-- to restrict to specific user IDs
CREATE POLICY "Authenticated users can view submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

-- Policy: Only authenticated users can update submissions
CREATE POLICY "Authenticated users can update submissions"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- ============================================
-- STORAGE BUCKETS
-- ============================================
-- NOTE: These should be created in the Supabase Dashboard → Storage
-- This is here for reference only
--
-- 1. client-files (Private)
--    - For client documents, SOPs, etc.
--
-- 2. knowledge-base (Private)
--    - For internal wiki docs
--
-- 3. public-assets (Public)
--    - For images, PDFs on public site

-- ============================================
-- FUTURE TABLES (Optional - for later features)
-- ============================================

-- CLIENTS TABLE (for client portal)
/*
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  company TEXT,
  phone TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view their own data"
ON clients FOR SELECT
TO authenticated
USING (auth.uid() = id);
*/

-- PROJECTS TABLE (for client portal)
/*
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'on-hold', 'cancelled')),
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view their own projects"
ON projects FOR SELECT
TO authenticated
USING (client_id = auth.uid());
*/

-- KNOWLEDGE BASE TABLE (for internal wiki)
/*
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[],
  category TEXT,
  author_id UUID REFERENCES auth.users(id),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view published articles"
ON knowledge_base FOR SELECT
TO authenticated
USING (is_published = true);
*/

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for contact_submissions
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ADMIN USER SETUP
-- ============================================
-- After running this schema:
-- 1. Go to Supabase Dashboard → Authentication → Users
-- 2. Click "Add user" → Create user with your email
-- 3. Note the user ID
-- 4. Update the RLS policies above to restrict to your user ID
--
-- Example:
-- CREATE POLICY "Only admin can view submissions"
-- ON contact_submissions FOR SELECT
-- TO authenticated
-- USING (auth.uid() = 'YOUR_USER_ID_HERE');

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these to verify everything is set up correctly:

-- Check tables exist
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Check RLS is enabled
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';

-- Check policies
-- SELECT * FROM pg_policies WHERE schemaname = 'public';

-- Test insert (should work)
-- INSERT INTO contact_submissions (name, email, message) VALUES ('Test User', 'test@example.com', 'Test message');

-- View all submissions
-- SELECT * FROM contact_submissions ORDER BY created_at DESC;
