import { JobsList} from "@/components/jobsList";


export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1> Hello! Welcome to the funemployment app!</h1>
            <JobsList/>
        </div>
    );
};