'use client';

import { useState } from 'react';

/**
 * Admission application form. Markup from unipix-Main/admission.html lines 243-347.
 * On submit: prevents default, logs FormData to console, shows alert, resets.
 * No backend in this phase - handler is intentionally stubbed.
 */
export default function AdmissionForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('[AdmissionForm] submitted:', data);
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      window.alert('Application submitted (demo). Backend coming soon.');
      form.reset();
      setSubmitting(false);
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="single-form-part">
        <h5 className="form-title">Personal Information</h5>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="First name" />
          </div>
          <div className="single-input-item">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last name" />
          </div>
        </div>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="email2">Enter your mail</label>
            <input type="email" id="email2" name="email2" placeholder="Enter your mail" />
          </div>
          <div className="single-input-item">
            <label htmlFor="phone">Enter Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
          </div>
        </div>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="dob">Date of Birth</label>
            <input type="text" id="datepicker" name="dob" placeholder="dd/mm/yy" />
          </div>
          <div className="single-input-item">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="*">Gender</option>
              <option value="*">Male</option>
              <option value="*">Female</option>
            </select>
          </div>
        </div>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="country">Select your Country </label>
            <input id="country" name="country" type="text" placeholder="Country" />
          </div>
        </div>
      </div>
      <div className="single-form-part">
        <h5 className="form-title">Academic Information</h5>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="cname">Collage Name</label>
            <input id="cname" name="cname" type="text" placeholder="Collage Name" />
          </div>
          <div className="single-input-item">
            <label htmlFor="gpa">Enter your GPA</label>
            <input id="gpa" name="gpa" type="text" placeholder="Enter your GPA" />
          </div>
        </div>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="cname2">Collage Name</label>
            <input id="cname2" name="cname2" type="text" placeholder="current college" />
          </div>
          <div className="single-input-item">
            <label htmlFor="gpa2">Enter your GPA</label>
            <input type="text" id="gpa2" name="gpa2" placeholder="Current GPA" />
          </div>
        </div>
      </div>
      <div className="single-form-part">
        <h5 className="form-title">Financial Information</h5>
        <div className="single-input">
          <div className="single-input-item">
            <label htmlFor="income">Household Income</label>
            <select name="income" id="income">
              <option value="*">Less then $1k</option>
              <option value="*">Less then $2k</option>
              <option value="*">Less then $3k</option>
            </select>
          </div>
          <div className="single-input-item">
            <label htmlFor="yes">applying for need-based financial aid</label>
            <select name="yes" id="yes">
              <option value="*">yes</option>
              <option value="*">no</option>
            </select>
          </div>
        </div>

      </div>
      <div className="single-form-part">
        <h5 className="form-title">Agreement and Submission</h5>
        <p>By submitting this application, I confirm that all information provided is accurate and complete. I understand that any false
          information may result in the disqualification of my application.
        </p>
        <div className="single-input-item">
          <label htmlFor="sub">Application Submission:</label>
          <input type="file" id="sub" name="sub" />
        </div>

        <div className="d-flex align-items-center single-checkbox mt--20">
          <input type="checkbox" id="exampleCheck1" name="exampleCheck1" />
          <label htmlFor="exampleCheck1">By submitting this form, you agree to the SU Website University Privacy Notice</label>
        </div>
      </div>
      <button type="submit" disabled={submitting} className="rts-theme-btn primary with-arrow">Submit Application<span><i className="fa-thin fa-arrow-right"></i></span></button>
    </form>
  );
}
