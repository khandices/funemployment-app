
const styles = {
    backgroundColor: "purple",
    color: "white",
    padding: "1rem 1.5rem",
    borderRadius: "20px",
    border: "0 none",
    marginLeft: "90rem"
}

export async function AddJobButton() {
    return (
        <button className="add-job-button" style={styles}>+ Add Job</button>
    )

}