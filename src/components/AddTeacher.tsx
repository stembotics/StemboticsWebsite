import { useState } from "react";
import type { FormEvent } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Select, Input, Textarea } from 'free-astro-components'
import Notice from "@/shortcodes/Notice";

export default function Form({user_id}) {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/addTeacher", {
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
        <input type="hidden" name="user_id" value={user_id} />
        <div className="form-group">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input className="form-control" type="text" id="first_name" name="first_name" autoComplete="given-name" required />
        </div>

        <div className="form-group">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input className="form-control" type="text" id="last_name" name="last_name" autoComplete="family-name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" type="email" id="email" name="email" autoComplete="email" required />
        </div>

        <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input className="form-control" type="date" id="dob" name="dob" autoComplete="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="institution" className="form-label">Institution</label>
          <input className="form-control" type="text" id="institution" name="institution" autoComplete="organization" required />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type="password" id="password" name="password" autoComplete="new-password" required />
        </div>
        <input
                className="btn btn-primary mt-10 block w-full"
                type="submit"
                value="Register as Teacher"
          />
      {responseMessage && <p>{responseMessage}</p>}
    </form>
    
  );
}