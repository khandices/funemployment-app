import { Job } from "@/types/job";
import { JobCard} from "@/components/jobCard";

const styles = {
    listContainer: {
        listStyleType: "none",
        margin: "5rem 20rem",
    }
}


export async function JobsList() {
    const result = await fetch("http://127.0.0.1:5000/jobs");
    const jobs: Job[] = await result.json();

    return (
        <ul className="jobsList" style={styles.listContainer}>
            {jobs.map((job) => (
                <li key={job.id}><JobCard job={job} /></li>
            ))}
        </ul>
    )
}