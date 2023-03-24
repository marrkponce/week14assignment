import Review from "./reviewpage";

const ReviewIndex = ({reviews}) => {
    
    return (
        <div>
            {
            reviews.map((review, index) => {
                return <Review key={index} review={review} />
            })
            }
        </div>
    );
}

export default ReviewIndex;