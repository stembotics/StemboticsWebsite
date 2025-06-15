import { db } from './db';

// Course Attendance Table
db.execute(`
  CREATE TABLE IF NOT EXISTS course_attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    child_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('present', 'absent', 'late')),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
  )
`); 