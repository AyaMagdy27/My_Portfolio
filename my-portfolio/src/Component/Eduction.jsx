import { EDUCATION } from "../constants"
const Eduction = () => {
    return (
        <div>
            <h2 className="my-20 text-center text-4xl text-purple-950">Eduction</h2>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <div className="flex flex-col justify-center lg:justify-start font-light tracking-tight leading-relaxed text-purple-950 ">
                        {EDUCATION.map((item, index) => (
                            <div key={index} className="mb-6">
                                <p className="text-2xl text-center font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Eduction