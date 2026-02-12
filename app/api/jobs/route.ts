import axios from 'axios';


export async function POST(req: Request) {
    const data= await req.json();

    try {
        const response = await axios.post('http://127.0.0.1:5000/jobs', data,
            {   method: 'POST',
                headers: {'Content-Type': 'application/json'}
            }
        );

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json'}
        });
    } catch (error) {
        console.log('Error sending request to Flask', error);
        return new Response(JSON.stringify({error: "Failed to submit Job"}),
            {
                headers: {"Content-Type": "application/json"}
            });
    }
}