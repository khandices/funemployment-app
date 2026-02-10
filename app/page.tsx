import { JobsList} from "@/components/jobsList";

const styles = {
    mainContainer: {
        width: "100%",
        height: "100%",
        textAlign: "center",
    },

    headerText: {
        fontSize: "2rem",
    }
}

export default function Home() {
    return (
        <div className="mainBody" style={styles.mainContainer}>
            <h1> Welcome to the funemployment app!</h1>
            <JobsList/>
        </div>
    );
};