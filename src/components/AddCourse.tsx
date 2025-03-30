import { useState } from "react";
import type { FormEvent } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Select, Input, Textarea } from 'free-astro-components'
import Notice from "@/shortcodes/Notice";

export default function Form({teacher_id}) {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/addCourse", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
        <input type="hidden" name="teacher_id" value={teacher_id} />
        <div className="form-group">
            <label htmlFor="name" className="form-label">Course Name</label>
            <input className="form-control" type="text" id="name" name="name" autoComplete="name" required />
        </div>
        <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" autoComplete="description" required></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <input className="form-control" type="text" id="category" name="category" autoComplete="category" required />
        </div>
        <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <input className="form-control" type="text" id="location" name="location" autoComplete="location" required />
        </div>
        <div className="form-group">
            <label htmlFor="start_date" className="form-label">Start Date</label>
            <input className="form-control" type="date" id="start_date" name="start_date" autoComplete="start-date" required />
        </div>
        <div className="form-group">
            <label htmlFor="end_date" className="form-label">End Date</label>
            <input className="form-control" type="date" id="end_date" name="end_date" autoComplete="end-date" required />
        </div>
        
        <div className="form-group">
            <label htmlFor="day" className="form-label">Select Day</label>
            <select className="form-control" name="day" id="day" required>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input className="form-control" type="number" id="price" name="price" autoComplete="price" required />
        </div>
        <input
                className="btn btn-primary mt-10 block w-full"
                type="submit"
                value="Add Course"
          />
      {/* <label htmlFor="name">
        Name
        <Input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="email">
        Email
        <Input type="email" id="email" name="email" autoComplete="email" required />
      </label>
      <label htmlFor="message">
        Message
        <Textarea id="message" name="message" autoComplete="off" required />
      </label>
      <button>Send</button> */}
      {responseMessage && <p>{responseMessage}</p>}
    </form>
    
  );
}