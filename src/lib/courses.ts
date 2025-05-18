import { db } from './db';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  category: string;
  level: string;
  duration: string;
  instructor_id: string;
  created_at: Date;
  updated_at: Date;
}

export async function getCourses(): Promise<Course[]> {
  try {
    const result = await db.execute(
      'SELECT * FROM courses WHERE is_published = true ORDER BY created_at DESC'
    );
    return result.rows.map(row => ({
      id: String(row.id || ''),
      title: String(row.title || ''),
      description: String(row.description || ''),
      price: Number(row.price || 0),
      image_url: row.image_url ? String(row.image_url) : undefined,
      category: String(row.category || ''),
      level: String(row.level || ''),
      duration: String(row.duration || ''),
      instructor_id: String(row.instructor_id || ''),
      created_at: row.created_at ? new Date(String(row.created_at)) : new Date(),
      updated_at: row.updated_at ? new Date(String(row.updated_at)) : new Date()
    }));
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
} 