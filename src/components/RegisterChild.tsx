import { useState } from "react";
import type { FormEvent } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Select, Input, Textarea } from 'free-astro-components'
import Notice from "@/shortcodes/Notice";

export default function Form({user_id, child_id, courses}) {
//   console.log(user_id)
//   console.log(child_id)
//   console.log(courses)

  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/registerChild", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

//   const { rows } = async turso.execute('SELECT * FROM Courses')
  

  return (
    <form onSubmit={submit}>
        <input type="hidden" name="user_id" value={user_id} />
        <input type="hidden" name="child_id" value={child_id} />
        <div className="form-group">
            <label htmlFor="course" className="form-label">Select Course</label>
            <select className="form-control" name="course" id="course" required>
                {courses.map((course) => (
                    <option value={course.name}>{course.name}</option>
                ))}
            </select>
        </div>
        
        <input
                className="btn btn-primary mt-10 block w-full"
                type="submit"
                value="Register Child"
          />
        
      
      {responseMessage && <p>{responseMessage}</p>}
    </form>
    
  );
}