export default function Ratings() {
    return <div className="flex justify-center p-10 flex-col items-center gap-4 mt-[5em]">
        <h2 className="font-bold text-4xl uppercase text-center mt-10 mb-6">Did you love the idea ? Rate us below</h2>
        <div className="rating rating-lg">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
        </div>
    </div>
}