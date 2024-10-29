import about from '../assets/about.jpg';
import { ABOUT_TXT } from '../constants';
const About = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl text-purple-950">
                About <span className="text-purple-600">Me</span>
            </h2>
            <div className="flex flex-wrap ">
                <div className=" w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={about} alt="about" className="rounded-2xl shadow-lg" />
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight leading-relaxed text-purple-950 text-xl'>{ABOUT_TXT} </p>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default About
