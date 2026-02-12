"use client";

import {ChangeEvent, useState} from "react";
import axios from "axios";


const styles = {
    formContainer: {
        backgroundColor: "lavender",
        borderRadius: "1rem",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        flexDirection: "column",
        margin: "0 35rem",
        padding: "2rem"
    },
    formLabel: {
        padding: "10px",
    },
    formInput: {
        padding: "10px",
        margin: "10px"
    },
    formButton: {
        margin: "10px 195px",
        backgroundColor: "purple",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "20px",
        border: "0 none",
    }
}

export function JobForm() {
    const [job, setJob] = useState({
        company_name: '',
        job_title: '',
        job_type: '',
        date_applied: '',
        location_type: '',
        referral: false
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setJob( prev => ({
            ...prev,
              [name]: value
        }));
    };

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        try {
            const response = await axios({
                method: "post",
                url: "/api/jobs",
                data: job
            });
            console.log("Data submitted: ", response.data);
            alert('Job app was submitted successfully.');

        } catch (error) {
            console.error("Error Message: ", error);
            alert('Yikes! There was an error submitting the job.')
        }

    }

    return (
        <form style={styles.formContainer} onSubmit={handleSubmit}>
            <label style={styles.formLabel}>
                Company Name:
                <input
                    style={styles.formInput}
                    name="company_name"
                    value={job.company_name}
                    type="text"
                    onChange={handleChange}
                />
            </label>
            <label style={styles.formLabel}>
                Job Title:
                <input
                    style={styles.formInput}
                    name="job_title"
                    value={job.job_title}
                    type="text"
                    onChange={handleChange}
                />
            </label>
            <label style={styles.formLabel}>
                Job Type:
                <input
                    style={styles.formInput}
                    name="job_type"
                    value={job.job_type}
                    type="text"
                    onChange={handleChange}
                />
            </label>
            <label style={styles.formLabel}>
                Location Type:
                <input
                    style={styles.formInput}
                    name="location_type"
                    value={job.location_type}
                    type="text"
                    onChange={handleChange}
                />
            </label>
            <label style={styles.formLabel}>
                Date Applied: MM/DD/YY
                <input
                    style={styles.formInput}
                    name="date_applied"
                    value={job.date_applied}
                    type="text"
                    onChange={handleChange}
                />
            </label>
            <label style={styles.formLabel}>
                Referral:
                <input
                    style={styles.formInput}
                    name="referral"
                    type="checkbox"
                    onChange={(e) =>
                    setJob( prev => ({
                        ...prev,
                        referral: e.target.checked
                    }))}
                />
            </label>
            <button style={styles.formButton} type="submit" value="Add new job app">Add App</button>
        </form>
    )
}