import { Job } from "@/types/job";

const styles = {
    cardContainer: {
        display: "flex",
        padding: "2rem",
        border: "2px solid blue",
        borderRadius: "25px",
        backgroundColor: "lavender",
        margin: "2rem",
        flexDirection: "column",
    },
    companyTitle: {
        textAlign: "center",
        fontSize: "1.5rem",
    },
    jobInfoContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "0 10rem",
        justifyContent: "space-between",
    },
    jobInfo: {
        fontSize: "1.25rem",
        borderRadius: "25px",
        padding: "1rem",
    },
}

type JobCardProps = {
    job: Job;
}
export async function JobCard({ job }: JobCardProps) {
    const dateApplied= new Date(job.date_applied).toLocaleDateString();
    return (
        <div className="jobCard" style={styles.cardContainer}>
            <h1 style={styles.companyTitle}>{job.company_name}</h1>
            <div style={styles.jobInfoContainer}>
                <p style={styles.jobInfo}>{job.job_title}</p>
                <p style={styles.jobInfo}>{job.job_type}</p>
                <p style={styles.jobInfo}>{job.location_type}</p>
                <p style={styles.jobInfo}>{dateApplied}</p>
            </div>
        </div>
    )

}