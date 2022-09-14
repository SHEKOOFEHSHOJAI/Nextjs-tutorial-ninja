
import {useRouter} from 'next/router';

export default function DetailPage() {
    
    const router=useRouter()
    const newId=router.query.newsid;

    // send a request to the backend api
    return (
        <div >
            <h1>The Detail Page </h1>
        </div>
    )
}