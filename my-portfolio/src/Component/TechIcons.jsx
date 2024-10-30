import { RiReactjsLine } from 'react-icons/ri';
import { RiHtml5Line } from 'react-icons/ri';
import { RiCss3Line } from 'react-icons/ri';
import { RiAngularjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { RiBootstrapLine } from 'react-icons/ri';
import { RiTailwindCssLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { motion } from "framer-motion";
const TechIcons = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl text-purple-950">
                Technology
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiHtml5Line className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiCss3Line className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiBootstrapLine className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiTailwindCssLine className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiJavascriptLine className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiReactjsLine className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <SiTypescript className="text-8xl text-violet-500" />
                </div>

                <div className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400 500/50">
                    <RiAngularjsLine className="text-8xl text-violet-500" />
                </div>

            </div>
        </div>
    )
}

export default TechIcons