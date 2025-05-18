/* empty css                                       */
import { c as createComponent, a as createAstro, d as renderTemplate, h as defineScriptVars, b as addAttribute, m as maybeRenderHead, e as renderComponent, u as unescapeHTML } from '../../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_Dt5ugNSC.mjs';
import 'clsx';
import { d as db, v as verifyToken } from '../../../chunks/auth_DuCNQg1W.mjs';
/* empty css                                        */
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$WeeklyContentForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WeeklyContentForm;
  const { courseId } = Astro2.props;
  const existingContent = await db.execute({
    sql: `SELECT week_number, 
        COUNT(*) as content_count 
        FROM course_content 
        WHERE course_id = ? 
        GROUP BY week_number 
        ORDER BY week_number`,
    args: [courseId]
  });
  const weeks = existingContent.rows.map((row) => ({
    weekNumber: row.week_number,
    contentCount: row.content_count
  }));
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="space-y-6" data-astro-cid-emq3woje> <div class="flex justify-between items-center" data-astro-cid-emq3woje> <h2 class="text-xl font-semibold" data-astro-cid-emq3woje>Course Content</h2> <button type="button" id="addWeekBtn" class="btn-outline text-sm" data-astro-cid-emq3woje>\nAdd Week\n</button> </div> <div id="weeksContainer" class="space-y-4" data-astro-cid-emq3woje> <!-- Weeks will be added here dynamically --> ', ' </div> </div> <!-- Content Form Modal --> <div id="contentFormModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center" data-astro-cid-emq3woje> <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4" data-astro-cid-emq3woje> <h3 class="text-lg font-semibold mb-4" data-astro-cid-emq3woje>Add Content</h3> <form id="contentForm" class="space-y-4" data-astro-cid-emq3woje> <input type="hidden" id="weekNumber" name="weekNumber" data-astro-cid-emq3woje> <div data-astro-cid-emq3woje> <label for="title" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Title *</label> <input type="text" id="title" name="title" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje> </div> <div data-astro-cid-emq3woje> <label for="type" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Type *</label> <select id="type" name="type" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje> <option value="video" data-astro-cid-emq3woje>Video</option> <option value="reading" data-astro-cid-emq3woje>Reading</option> <option value="quiz" data-astro-cid-emq3woje>Quiz</option> <option value="assignment" data-astro-cid-emq3woje>Assignment</option> </select> </div> <div data-astro-cid-emq3woje> <label for="description" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Description *</label> <textarea id="description" name="description" rows="3" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje></textarea> </div> <div data-astro-cid-emq3woje> <label for="content" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Content *</label> <textarea id="content" name="content" rows="4" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje></textarea> <p class="mt-1 text-sm text-slate-500" data-astro-cid-emq3woje>Add content URL for videos, text content for readings, or questions for quizzes</p> </div> <div id="errorMessage" class="text-red-600 text-sm hidden" data-astro-cid-emq3woje></div> <div class="flex justify-end gap-3 mt-6" data-astro-cid-emq3woje> <button type="button" id="cancelContentBtn" class="btn-outline" data-astro-cid-emq3woje>\nCancel\n</button> <button type="submit" class="btn-primary" data-astro-cid-emq3woje>\nAdd Content\n</button> </div> </form> </div> </div> <script>(function(){', `
  let nextWeekNumber = weeks.length ? Math.max(...weeks.map(w => w.weekNumber)) + 1 : 1;
  
  // Function to setup week handlers
  function setupWeekHandlers(weekSection) {
    const header = weekSection.querySelector('.week-header');
    const content = weekSection.querySelector('.week-content');
    const arrow = weekSection.querySelector('svg');
    
    header?.addEventListener('click', () => {
      content?.classList.toggle('hidden');
      arrow?.classList.toggle('rotate-180');
    });

    const addContentBtn = weekSection.querySelector('.add-content-btn');
    addContentBtn?.addEventListener('click', () => {
      const modal = document.getElementById('contentFormModal');
      const weekInput = document.getElementById('weekNumber');
      if (modal && weekInput) {
        modal.classList.remove('hidden');
        weekInput.value = weekSection.dataset.week || '';
      }
    });
  }

  // Setup existing weeks
  document.querySelectorAll('.week-section').forEach(setupWeekHandlers);
  
  // Add Week Button
  document.getElementById('addWeekBtn')?.addEventListener('click', () => {
    const weeksContainer = document.getElementById('weeksContainer');
    const weekSection = document.createElement('div');
    weekSection.className = 'week-section border rounded-lg overflow-hidden';
    weekSection.dataset.week = nextWeekNumber.toString();
    
    weekSection.innerHTML = \`
      <div class="week-header bg-slate-50 p-4 flex justify-between items-center cursor-pointer">
        <h3 class="font-medium">Week \${nextWeekNumber}</h3>
        <div class="flex items-center gap-2">
          <span class="text-sm text-slate-600">0 items</span>
          <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div class="week-content hidden p-4 space-y-4">
        <div class="flex justify-end">
          <button type="button" class="add-content-btn btn-primary text-sm">
            Add Content
          </button>
        </div>
      </div>
    \`;
    
    weeksContainer?.appendChild(weekSection);
    setupWeekHandlers(weekSection);
    nextWeekNumber++;
  });

  // Modal handlers
  const modal = document.getElementById('contentFormModal');
  const cancelBtn = document.getElementById('cancelContentBtn');
  const contentForm = document.getElementById('contentForm');
  const errorMessage = document.getElementById('errorMessage');

  cancelBtn?.addEventListener('click', () => {
    modal?.classList.add('hidden');
    contentForm?.reset();
    if (errorMessage) errorMessage.classList.add('hidden');
  });

  contentForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contentForm);
    const data = {
      courseId,
      weekNumber: parseInt(formData.get('weekNumber')),
      title: formData.get('title'),
      type: formData.get('type'),
      description: formData.get('description'),
      content: formData.get('content'),
      order: 0
    };

    try {
      const response = await fetch('/api/courses/content/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create content');
      }

      window.location.reload();
    } catch (error) {
      if (errorMessage) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
      }
    }
  });
})();<\/script> `], ["", '<div class="space-y-6" data-astro-cid-emq3woje> <div class="flex justify-between items-center" data-astro-cid-emq3woje> <h2 class="text-xl font-semibold" data-astro-cid-emq3woje>Course Content</h2> <button type="button" id="addWeekBtn" class="btn-outline text-sm" data-astro-cid-emq3woje>\nAdd Week\n</button> </div> <div id="weeksContainer" class="space-y-4" data-astro-cid-emq3woje> <!-- Weeks will be added here dynamically --> ', ' </div> </div> <!-- Content Form Modal --> <div id="contentFormModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center" data-astro-cid-emq3woje> <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4" data-astro-cid-emq3woje> <h3 class="text-lg font-semibold mb-4" data-astro-cid-emq3woje>Add Content</h3> <form id="contentForm" class="space-y-4" data-astro-cid-emq3woje> <input type="hidden" id="weekNumber" name="weekNumber" data-astro-cid-emq3woje> <div data-astro-cid-emq3woje> <label for="title" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Title *</label> <input type="text" id="title" name="title" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje> </div> <div data-astro-cid-emq3woje> <label for="type" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Type *</label> <select id="type" name="type" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje> <option value="video" data-astro-cid-emq3woje>Video</option> <option value="reading" data-astro-cid-emq3woje>Reading</option> <option value="quiz" data-astro-cid-emq3woje>Quiz</option> <option value="assignment" data-astro-cid-emq3woje>Assignment</option> </select> </div> <div data-astro-cid-emq3woje> <label for="description" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Description *</label> <textarea id="description" name="description" rows="3" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje></textarea> </div> <div data-astro-cid-emq3woje> <label for="content" class="block text-sm font-medium text-slate-700 mb-1" data-astro-cid-emq3woje>Content *</label> <textarea id="content" name="content" rows="4" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" data-astro-cid-emq3woje></textarea> <p class="mt-1 text-sm text-slate-500" data-astro-cid-emq3woje>Add content URL for videos, text content for readings, or questions for quizzes</p> </div> <div id="errorMessage" class="text-red-600 text-sm hidden" data-astro-cid-emq3woje></div> <div class="flex justify-end gap-3 mt-6" data-astro-cid-emq3woje> <button type="button" id="cancelContentBtn" class="btn-outline" data-astro-cid-emq3woje>\nCancel\n</button> <button type="submit" class="btn-primary" data-astro-cid-emq3woje>\nAdd Content\n</button> </div> </form> </div> </div> <script>(function(){', `
  let nextWeekNumber = weeks.length ? Math.max(...weeks.map(w => w.weekNumber)) + 1 : 1;
  
  // Function to setup week handlers
  function setupWeekHandlers(weekSection) {
    const header = weekSection.querySelector('.week-header');
    const content = weekSection.querySelector('.week-content');
    const arrow = weekSection.querySelector('svg');
    
    header?.addEventListener('click', () => {
      content?.classList.toggle('hidden');
      arrow?.classList.toggle('rotate-180');
    });

    const addContentBtn = weekSection.querySelector('.add-content-btn');
    addContentBtn?.addEventListener('click', () => {
      const modal = document.getElementById('contentFormModal');
      const weekInput = document.getElementById('weekNumber');
      if (modal && weekInput) {
        modal.classList.remove('hidden');
        weekInput.value = weekSection.dataset.week || '';
      }
    });
  }

  // Setup existing weeks
  document.querySelectorAll('.week-section').forEach(setupWeekHandlers);
  
  // Add Week Button
  document.getElementById('addWeekBtn')?.addEventListener('click', () => {
    const weeksContainer = document.getElementById('weeksContainer');
    const weekSection = document.createElement('div');
    weekSection.className = 'week-section border rounded-lg overflow-hidden';
    weekSection.dataset.week = nextWeekNumber.toString();
    
    weekSection.innerHTML = \\\`
      <div class="week-header bg-slate-50 p-4 flex justify-between items-center cursor-pointer">
        <h3 class="font-medium">Week \\\${nextWeekNumber}</h3>
        <div class="flex items-center gap-2">
          <span class="text-sm text-slate-600">0 items</span>
          <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div class="week-content hidden p-4 space-y-4">
        <div class="flex justify-end">
          <button type="button" class="add-content-btn btn-primary text-sm">
            Add Content
          </button>
        </div>
      </div>
    \\\`;
    
    weeksContainer?.appendChild(weekSection);
    setupWeekHandlers(weekSection);
    nextWeekNumber++;
  });

  // Modal handlers
  const modal = document.getElementById('contentFormModal');
  const cancelBtn = document.getElementById('cancelContentBtn');
  const contentForm = document.getElementById('contentForm');
  const errorMessage = document.getElementById('errorMessage');

  cancelBtn?.addEventListener('click', () => {
    modal?.classList.add('hidden');
    contentForm?.reset();
    if (errorMessage) errorMessage.classList.add('hidden');
  });

  contentForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contentForm);
    const data = {
      courseId,
      weekNumber: parseInt(formData.get('weekNumber')),
      title: formData.get('title'),
      type: formData.get('type'),
      description: formData.get('description'),
      content: formData.get('content'),
      order: 0
    };

    try {
      const response = await fetch('/api/courses/content/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create content');
      }

      window.location.reload();
    } catch (error) {
      if (errorMessage) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
      }
    }
  });
})();<\/script> `])), maybeRenderHead(), weeks.map((week) => renderTemplate`<div class="week-section border rounded-lg overflow-hidden"${addAttribute(week.weekNumber, "data-week")} data-astro-cid-emq3woje> <div class="week-header bg-slate-50 p-4 flex justify-between items-center cursor-pointer" data-astro-cid-emq3woje> <h3 class="font-medium" data-astro-cid-emq3woje>Week ${week.weekNumber}</h3> <div class="flex items-center gap-2" data-astro-cid-emq3woje> <span class="text-sm text-slate-600" data-astro-cid-emq3woje>${week.contentCount} items</span> <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-emq3woje> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-emq3woje></path> </svg> </div> </div> <div class="week-content hidden p-4 space-y-4" data-astro-cid-emq3woje> <div class="flex justify-end" data-astro-cid-emq3woje> <button type="button" class="add-content-btn btn-primary text-sm" data-astro-cid-emq3woje>
Add Content
</button> </div> <!-- Content items will be loaded here --> </div> </div>`), defineScriptVars({ courseId, weeks }));
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/WeeklyContentForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$Manage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Manage;
  const { id } = Astro2.params;
  if (!id) {
    return new Response("Course ID is required", { status: 400 });
  }
  console.log(id);
  const token = Astro2.cookies.get("token");
  if (!token) {
    return Astro2.redirect("/login");
  }
  const user = verifyToken(token.value);
  if (!user) {
    return Astro2.redirect("/login");
  }
  const courseResult = await db.execute({
    sql: `SELECT c.*, u.first_name, u.last_name 
        FROM courses c
        JOIN users u ON u.id = c.instructor_id
        WHERE c.id = ? AND c.instructor_id = ?`,
    args: [id, user.userId]
  });
  if (!courseResult.rows[0]) {
    return new Response("Course not found or unauthorized", { status: 404 });
  }
  const course = {
    id: String(courseResult.rows[0].id),
    title: String(courseResult.rows[0].title),
    instructor_name: `${courseResult.rows[0].first_name} ${courseResult.rows[0].last_name}`
  };
  const studentsResult = await db.execute({
    sql: `SELECT u.id, u.first_name, u.last_name
        FROM enrollments e
        JOIN users u ON e.user_id = u.id
        WHERE e.course_id = ?`,
    args: [id]
  });
  const students = studentsResult.rows.map((row) => ({
    id: Number(row.id),
    first_name: String(row.first_name),
    last_name: String(row.last_name)
  }));
  return renderTemplate(_b || (_b = __template(["", ` <!-- After saving this file, restart your Astro dev server to clear any cache. --> <!-- <script type="application/json" id="students-data">{JSON.stringify(students)}<\/script>
<script type="application/json" id="course-id-data">{JSON.stringify(String(id))}<\/script> --> <script type="module">
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('Session management script loaded!');
    console.log(document.getElementById('course-id-data').textContent);
    const courseId = JSON.parse(document.getElementById('course-id-data').textContent);
    const studentsData = document.getElementById('students-data');
    if (!studentsData) {
      console.error('students-data element not found!');
      return;
    }
    const students = JSON.parse(studentsData.textContent);

    async function fetchSessions() {
      try {
        console.log('Fetching sessions...');
        const res = await fetch(\`/api/courses/\${courseId}/sessions\`);
        const sessions = await res.json();
        console.log('Sessions:', sessions);
        const container = document.getElementById('sessions-list');
        container.innerHTML = '';
        for (const session of sessions) {
          // Attendance fetch
          console.log('Fetching attendance for session', session.id);
          const attRes = await fetch(\`/api/sessions/\${session.id}/attendance\`);
          const attendance = await attRes.json();
          console.log('Attendance:', attendance);
          // Notes fetch
          console.log('Fetching notes for session', session.id);
          const notesRes = await fetch(\`/api/sessions/\${session.id}/notes\`);
          const notes = await notesRes.json();
          console.log('Notes:', notes);
          // Render session
          const sessionDiv = document.createElement('div');
          sessionDiv.className = 'mb-8 border rounded-lg p-4';
          sessionDiv.innerHTML = \`
            <div class="flex items-center justify-between mb-2">
              <div>
                <span class="font-semibold">Date:</span> \${session.session_date}
                <span class="ml-4 font-semibold">Notes:</span> <span class="session-notes" data-session-id="\${session.id}">\${session.notes || ''}</span>
              </div>
              <button class="delete-session-btn text-red-600" data-session-id="\${session.id}">Delete</button>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-200 mb-2">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Student</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  \${students.map(student => {
                    const record = attendance.find(a => a.student_id === student.id);
                    return \`
                      <tr>
                        <td class="px-4 py-2 whitespace-nowrap font-medium">\${student.first_name} \${student.last_name}</td>
                        <td class="px-4 py-2">
                          <select class="attendance-select rounded-md border-slate-300" data-session-id="\${session.id}" data-student-id="\${student.id}">
                            <option value="pending" \${record?.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="completed" \${record?.status === 'completed' ? 'selected' : ''}>Completed</option>
                            <option value="missed" \${record?.status === 'missed' ? 'selected' : ''}>Missed</option>
                          </select>
                        </td>
                      </tr>
                    \`;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <div class="mb-2">
              <label class="font-semibold">Session Notes:</label>
              <input type="text" class="edit-session-notes border rounded px-2 py-1 ml-2" data-session-id="\${session.id}" value="\${session.notes || ''}" style="width: 60%" />
              <button class="save-notes-btn btn-secondary ml-2" data-session-id="\${session.id}">Save Notes</button>
            </div>
            <div class="mb-2">
              <label class="font-semibold">Extra Notes:</label>
              <ul>
                \${notes.map(note => \`<li>\${note.note}</li>\`).join('')}
              </ul>
              <input type="text" class="add-extra-note border rounded px-2 py-1 mt-1" data-session-id="\${session.id}" placeholder="Add extra note..." style="width: 60%" />
              <button class="add-extra-note-btn btn-secondary ml-2" data-session-id="\${session.id}">Add Note</button>
            </div>
          \`;
          container.appendChild(sessionDiv);
        }
        attachHandlers();
      } catch (err) {
        console.error('Error fetching sessions:', err);
        alert('Failed to fetch sessions. See console for details.');
      }
    }

    function attachHandlers() {
      // Attendance change
      document.querySelectorAll('.attendance-select').forEach(select => {
        select.addEventListener('change', async (e) => {
          const target = e.target;
          const sessionId = target.dataset.sessionId;
          const studentId = target.dataset.studentId;
          const status = target.value;
          try {
            console.log('Updating attendance:', { sessionId, studentId, status });
            const resp = await fetch(\`/api/sessions/\${sessionId}/attendance\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ student_id: parseInt(studentId), status })
            });
            const data = await resp.json();
            console.log('Attendance update response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to update attendance');
          } catch (err) {
            console.error('Error updating attendance:', err);
            alert('Failed to update attendance. See console for details.');
          }
        });
      });
      // Delete session
      document.querySelectorAll('.delete-session-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          try {
            console.log('Deleting session:', sessionId);
            const resp = await fetch(\`/api/courses/\${courseId}/sessions\`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId })
            });
            const data = await resp.json();
            console.log('Delete session response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to delete session');
            fetchSessions();
          } catch (err) {
            console.error('Error deleting session:', err);
            alert('Failed to delete session. See console for details.');
          }
        });
      });
      // Save session notes
      document.querySelectorAll('.save-notes-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          const input = document.querySelector(\`.edit-session-notes[data-session-id='\${sessionId}']\`);
          const notes = input.value;
          try {
            console.log('Saving session notes:', { sessionId, notes });
            const resp = await fetch(\`/api/courses/\${courseId}/sessions\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ session_date: input.closest('div').parentElement.querySelector('span').textContent.trim(), notes })
            });
            const data = await resp.json();
            console.log('Save notes response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to save notes');
            fetchSessions();
          } catch (err) {
            console.error('Error saving notes:', err);
            alert('Failed to save notes. See console for details.');
          }
        });
      });
      // Add extra note
      document.querySelectorAll('.add-extra-note-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          const input = document.querySelector(\`.add-extra-note[data-session-id='\${sessionId}']\`);
          const note = input.value;
          if (!note) return;
          try {
            console.log('Adding extra note:', { sessionId, note });
            const resp = await fetch(\`/api/sessions/\${sessionId}/notes\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ note })
            });
            const data = await resp.json();
            console.log('Add extra note response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to add note');
            fetchSessions();
          } catch (err) {
            console.error('Error adding note:', err);
            alert('Failed to add note. See console for details.');
          }
        });
      });
    }

    document.getElementById('add-session-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const session_date = form.session_date.value;
      const notes = form.notes.value;
      try {
        console.log('Adding session:', { session_date, notes });
        const resp = await fetch(\`/api/courses/\${courseId}/sessions\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_date, notes })
        });
        const data = await resp.json();
        console.log('Add session response:', data);
        if (!resp.ok) throw new Error(data.error || 'Failed to add session');
        form.reset();
        fetchSessions();
      } catch (err) {
        console.error('Error adding session:', err);
        alert('Failed to add session. See console for details.');
      }
    });

    fetchSessions();
  } catch (err) {
    console.error('Script initialization error:', err);
    alert('Script initialization error. See console for details.');
  }
});
<\/script>`], ["", ` <!-- After saving this file, restart your Astro dev server to clear any cache. --> <!-- <script type="application/json" id="students-data">{JSON.stringify(students)}<\/script>
<script type="application/json" id="course-id-data">{JSON.stringify(String(id))}<\/script> --> <script type="module">
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('Session management script loaded!');
    console.log(document.getElementById('course-id-data').textContent);
    const courseId = JSON.parse(document.getElementById('course-id-data').textContent);
    const studentsData = document.getElementById('students-data');
    if (!studentsData) {
      console.error('students-data element not found!');
      return;
    }
    const students = JSON.parse(studentsData.textContent);

    async function fetchSessions() {
      try {
        console.log('Fetching sessions...');
        const res = await fetch(\\\`/api/courses/\\\${courseId}/sessions\\\`);
        const sessions = await res.json();
        console.log('Sessions:', sessions);
        const container = document.getElementById('sessions-list');
        container.innerHTML = '';
        for (const session of sessions) {
          // Attendance fetch
          console.log('Fetching attendance for session', session.id);
          const attRes = await fetch(\\\`/api/sessions/\\\${session.id}/attendance\\\`);
          const attendance = await attRes.json();
          console.log('Attendance:', attendance);
          // Notes fetch
          console.log('Fetching notes for session', session.id);
          const notesRes = await fetch(\\\`/api/sessions/\\\${session.id}/notes\\\`);
          const notes = await notesRes.json();
          console.log('Notes:', notes);
          // Render session
          const sessionDiv = document.createElement('div');
          sessionDiv.className = 'mb-8 border rounded-lg p-4';
          sessionDiv.innerHTML = \\\`
            <div class="flex items-center justify-between mb-2">
              <div>
                <span class="font-semibold">Date:</span> \\\${session.session_date}
                <span class="ml-4 font-semibold">Notes:</span> <span class="session-notes" data-session-id="\\\${session.id}">\\\${session.notes || ''}</span>
              </div>
              <button class="delete-session-btn text-red-600" data-session-id="\\\${session.id}">Delete</button>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-200 mb-2">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Student</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  \\\${students.map(student => {
                    const record = attendance.find(a => a.student_id === student.id);
                    return \\\`
                      <tr>
                        <td class="px-4 py-2 whitespace-nowrap font-medium">\\\${student.first_name} \\\${student.last_name}</td>
                        <td class="px-4 py-2">
                          <select class="attendance-select rounded-md border-slate-300" data-session-id="\\\${session.id}" data-student-id="\\\${student.id}">
                            <option value="pending" \\\${record?.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="completed" \\\${record?.status === 'completed' ? 'selected' : ''}>Completed</option>
                            <option value="missed" \\\${record?.status === 'missed' ? 'selected' : ''}>Missed</option>
                          </select>
                        </td>
                      </tr>
                    \\\`;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <div class="mb-2">
              <label class="font-semibold">Session Notes:</label>
              <input type="text" class="edit-session-notes border rounded px-2 py-1 ml-2" data-session-id="\\\${session.id}" value="\\\${session.notes || ''}" style="width: 60%" />
              <button class="save-notes-btn btn-secondary ml-2" data-session-id="\\\${session.id}">Save Notes</button>
            </div>
            <div class="mb-2">
              <label class="font-semibold">Extra Notes:</label>
              <ul>
                \\\${notes.map(note => \\\`<li>\\\${note.note}</li>\\\`).join('')}
              </ul>
              <input type="text" class="add-extra-note border rounded px-2 py-1 mt-1" data-session-id="\\\${session.id}" placeholder="Add extra note..." style="width: 60%" />
              <button class="add-extra-note-btn btn-secondary ml-2" data-session-id="\\\${session.id}">Add Note</button>
            </div>
          \\\`;
          container.appendChild(sessionDiv);
        }
        attachHandlers();
      } catch (err) {
        console.error('Error fetching sessions:', err);
        alert('Failed to fetch sessions. See console for details.');
      }
    }

    function attachHandlers() {
      // Attendance change
      document.querySelectorAll('.attendance-select').forEach(select => {
        select.addEventListener('change', async (e) => {
          const target = e.target;
          const sessionId = target.dataset.sessionId;
          const studentId = target.dataset.studentId;
          const status = target.value;
          try {
            console.log('Updating attendance:', { sessionId, studentId, status });
            const resp = await fetch(\\\`/api/sessions/\\\${sessionId}/attendance\\\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ student_id: parseInt(studentId), status })
            });
            const data = await resp.json();
            console.log('Attendance update response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to update attendance');
          } catch (err) {
            console.error('Error updating attendance:', err);
            alert('Failed to update attendance. See console for details.');
          }
        });
      });
      // Delete session
      document.querySelectorAll('.delete-session-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          try {
            console.log('Deleting session:', sessionId);
            const resp = await fetch(\\\`/api/courses/\\\${courseId}/sessions\\\`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId })
            });
            const data = await resp.json();
            console.log('Delete session response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to delete session');
            fetchSessions();
          } catch (err) {
            console.error('Error deleting session:', err);
            alert('Failed to delete session. See console for details.');
          }
        });
      });
      // Save session notes
      document.querySelectorAll('.save-notes-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          const input = document.querySelector(\\\`.edit-session-notes[data-session-id='\\\${sessionId}']\\\`);
          const notes = input.value;
          try {
            console.log('Saving session notes:', { sessionId, notes });
            const resp = await fetch(\\\`/api/courses/\\\${courseId}/sessions\\\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ session_date: input.closest('div').parentElement.querySelector('span').textContent.trim(), notes })
            });
            const data = await resp.json();
            console.log('Save notes response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to save notes');
            fetchSessions();
          } catch (err) {
            console.error('Error saving notes:', err);
            alert('Failed to save notes. See console for details.');
          }
        });
      });
      // Add extra note
      document.querySelectorAll('.add-extra-note-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const sessionId = btn.dataset.sessionId;
          const input = document.querySelector(\\\`.add-extra-note[data-session-id='\\\${sessionId}']\\\`);
          const note = input.value;
          if (!note) return;
          try {
            console.log('Adding extra note:', { sessionId, note });
            const resp = await fetch(\\\`/api/sessions/\\\${sessionId}/notes\\\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ note })
            });
            const data = await resp.json();
            console.log('Add extra note response:', data);
            if (!resp.ok) throw new Error(data.error || 'Failed to add note');
            fetchSessions();
          } catch (err) {
            console.error('Error adding note:', err);
            alert('Failed to add note. See console for details.');
          }
        });
      });
    }

    document.getElementById('add-session-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const session_date = form.session_date.value;
      const notes = form.notes.value;
      try {
        console.log('Adding session:', { session_date, notes });
        const resp = await fetch(\\\`/api/courses/\\\${courseId}/sessions\\\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_date, notes })
        });
        const data = await resp.json();
        console.log('Add session response:', data);
        if (!resp.ok) throw new Error(data.error || 'Failed to add session');
        form.reset();
        fetchSessions();
      } catch (err) {
        console.error('Error adding session:', err);
        alert('Failed to add session. See console for details.');
      }
    });

    fetchSessions();
  } catch (err) {
    console.error('Script initialization error:', err);
    alert('Script initialization error. See console for details.');
  }
});
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": `Manage Course | ${course.title}` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="min-h-screen bg-slate-50"> <div class="bg-gradient-to-r from-primary-600 to-secondary-600 pb-32"> <header class="py-10"> <div class="container-custom"> <div class="flex items-center justify-between"> <div> <h1 class="text-white text-3xl font-bold">', '</h1> <p class="mt-2 text-primary-100">\nInstructor: ', " </p> </div> <a", ' class="btn-white">\nView Course\n</a> </div> </div> </header> </div> <main class="-mt-32"> <div class="container-custom"> <div class="bg-white rounded-lg shadow-sm p-6 mb-8"> ', ' </div> <div class="bg-white rounded-lg shadow-md p-6 mb-8"> <h2 class="text-2xl font-bold mb-4">Class Sessions & Attendance</h2> <form id="add-session-form" class="flex flex-col md:flex-row gap-4 mb-6"> <input type="date" name="session_date" class="border rounded px-3 py-2" required> <input type="text" name="notes" class="border rounded px-3 py-2 flex-1" placeholder="Session notes (optional)"> <button type="submit" class="btn-primary">Add Session</button> </form> <div id="sessions-list"></div> </div> </div> </main> </div>  <script type="application/json" id="course-id-data">', '<\/script> <script type="application/json" id="students-data">', "<\/script>  "])), maybeRenderHead(), course.title, course.instructor_name, addAttribute(`/courses/${course.id}`, "href"), renderComponent($$result2, "WeeklyContentForm", $$WeeklyContentForm, { "courseId": course.id }), unescapeHTML(JSON.stringify(String(id))), unescapeHTML(JSON.stringify(students))) }));
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id]/manage.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id]/manage.astro";
const $$url = "/courses/[id]/manage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Manage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
