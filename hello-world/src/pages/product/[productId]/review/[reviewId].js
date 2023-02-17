import { useRouter } from 'next/router'

function Review () {
    const router = useRouter();
    const {reviewId ,productId }= router.query
    return <h2>review{productId} for {reviewId}</h2>
}
export default Review;