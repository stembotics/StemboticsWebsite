import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate } from './astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import 'clsx';
import { d as db } from './auth_DGYWq9VH.mjs';

const $$Astro = createAstro();
const $$TimeSlotManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeSlotManager;
  const { courseId, isEditing = false } = Astro2.props;
  let timeSlots = [];
  if (isEditing) {
    const result = await db.execute({
      sql: `
      SELECT * FROM time_slots 
      WHERE course_id = ? 
      ORDER BY day_of_week, start_time
    `,
      args: [courseId]
    });
    timeSlots = result.rows;
  }
  return renderTemplate`${maybeRenderHead()}<div class="space-y-6"> <input type="hidden" id="courseId"${addAttribute(courseId, "value")}> <div class="flex justify-between items-center"> <h3 class="text-lg font-semibold text-gray-900">Course Time Slots</h3> <button type="button" class="add-time-slot-btn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Add Time Slot
</button> </div> <div id="time-slots-container" class="space-y-4"> ${timeSlots.map((slot) => renderTemplate`<div class="time-slot-item bg-white p-4 rounded-lg border border-gray-200 shadow-sm"> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-700">Day of Week</label> <select name="day_of_week" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(slot.day_of_week, "value")}> <option value="Monday">Monday</option> <option value="Tuesday">Tuesday</option> <option value="Wednesday">Wednesday</option> <option value="Thursday">Thursday</option> <option value="Friday">Friday</option> <option value="Saturday">Saturday</option> <option value="Sunday">Sunday</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700">Start Time</label> <input type="time" name="start_time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(slot.start_time, "value")}> </div> <div> <label class="block text-sm font-medium text-gray-700">End Time</label> <input type="time" name="end_time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(slot.end_time, "value")}> </div> <div> <label class="block text-sm font-medium text-gray-700">Max Capacity</label> <input type="number" name="max_capacity" min="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(slot.max_capacity, "value")}> </div> </div> <div class="mt-4 flex justify-end"> <button type="button" class="remove-time-slot-btn inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"${addAttribute(slot.id, "data-slot-id")}>
Remove
</button> </div> </div>`)} </div> <button type="button" class="save-time-slots-btn btn-primary mt-4">
Save Time Slots
</button> </div> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/TimeSlotManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/TimeSlotManager.astro", void 0);

export { $$TimeSlotManager as $ };
