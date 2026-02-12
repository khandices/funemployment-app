import { JobsList} from "@/components/jobsList";
import { JobForm } from "@/components/jobForm";
import { AddJobButton } from "@/components/addJobButton";

const styles = {
    mainContainer: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        margin: "auto",
        marginTop: "4rem",
    },

    headerText: {
        fontSize: "3rem",
        color: "purple",
    }
}

export default function Home() {
    return (
        <div className="mainBody" style={styles.mainContainer}>
            <h1 style={styles.headerText}> Welcome to the Funemployment app!</h1>
            <AddJobButton/>
            <JobForm/>
            <JobsList/>
        </div>
    );
};