import { OBJECTIVE } from '../constants/index';
import hero from '../assets/hero1.png';
const Hero = () => {
    return (
        <div className=" pb-4 lg:mb-35 w-full">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-purple-950">Aya Magdy</h2>
                        <span className="bg-gradient-to-r from-violet-400  via-slate-500 to-purple-950 bg-clip-text text-4xl tracking-tight text-transparent"> Software Engineer </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight leading-relaxed text-purple-950 text-lg'>{OBJECTIVE}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={hero} alt="Aya Magdy" className="w-full lg:w-2/3 " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero