import { Job } from "@/types/job";

type JobCardProps = {
    job: Job;
}
export async function JobCard({ job }: JobCardProps) {

    return (
        <div className="jobCard">
            <h1>{job.company_name}</h1>
            <p>{job.job_title}</p>
            <p>{job.job_type}</p>
            <p>{job.date_applied.toString()}</p>
        </div>
    )

}