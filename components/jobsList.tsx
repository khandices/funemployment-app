import { Job } from "@/types/job";
import { JobCard} from "@/components/jobCard";


export async function JobsList() {
    const result = await fetch("http://127.0.0.1:5000/jobs");
    const jobs: Job[] = await result.json();

    return (
        <ul className="jobsList">
            {jobs.map((job) => (
                <li key={job.id}><JobCard job={job} /></li>
            ))}
        </ul>
    )
}