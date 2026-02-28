import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {

return (

<div className="bg-slate-900 text-white">


{/* NAVBAR */}

<div className="flex justify-between p-6 backdrop-blur-md bg-white/10 sticky top-0">

<h1 className="text-2xl font-bold">

Shardul.dev

</h1>

<div className="space-x-6">

<a href="#about">About</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

</div>

</div>



{/* HERO */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1.5}}
className="h-screen flex flex-col justify-center items-center text-center"
>

<h1 className="text-6xl font-bold">

Hi I'm Shardul

</h1>


<h2 className="text-2xl mt-4 text-blue-400">

<TypeAnimation
sequence={[
'Java Developer',
2000,
]}
wrapper="span"
speed={50}
repeat={Infinity}
/>

</h2>


<div className="mt-8 space-x-4">

<a
href="/ShardulLote_resume.pdf"
className="bg-blue-600 px-6 py-3 rounded-xl"
>

Download Resume

</a>

<a
href="#projects"
className="border px-6 py-3 rounded-xl"
>

Projects

</a>

</div>

</motion.div>



{/* ABOUT */}

<div id="about" className="p-20">

<h2 className="text-4xl mb-6">

About Me

</h2>

<p className="text-lg max-w-3xl">

Full Stack Java Developer specializing in
Spring Boot and AI applications.

Built microservices, schedulers,
AI agents and RAG systems.

</p>

</div>



{/* PROJECTS */}

<div id="projects" className="p-20">

<h2 className="text-4xl mb-10">

Projects

</h2>


<div className="grid md:grid-cols-3 gap-8">


<motion.div
whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
>

<h3 className="text-2xl">

AI HR Agent

</h3>

<p>

LangChain + Ollama AI automation.

</p>

</motion.div>



<motion.div
whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
>

<h3 className="text-2xl">

Reminder Scheduler

</h3>

<p>

Dynamic cron scheduler using Spring Boot.

</p>

</motion.div>



<motion.div
whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
>

<h3 className="text-2xl">

Spring AI RAG

</h3>

<p>

Semantic search AI system.

</p>

</motion.div>


</div>

</div>



{/* SKILLS */}

<div className="p-20">

<h2 className="text-4xl mb-6">

Skills

</h2>

<div className="flex flex-wrap gap-4">


<span className="bg-slate-700 p-3 rounded-lg">

Java

</span>

<span className="bg-slate-700 p-3 rounded-lg">

Spring Boot

</span>

<span className="bg-slate-700 p-3 rounded-lg">

MongoDB

</span>

<span className="bg-slate-700 p-3 rounded-lg">

AI

</span>

<span className="bg-slate-700 p-3 rounded-lg">

Docker

</span>


</div>

</div>



{/* GITHUB */}

<div className="p-20 text-center">

<h2 className="text-4xl mb-6">

Github Stats

</h2>


<img
src="https://github-readme-stats.vercel.app/api?username=UniStar903&theme=dark"
/>

</div>



{/* CONTACT */}

<div id="contact" className="p-20 text-center">

<h2 className="text-4xl mb-6">

Contact

</h2>


<div className="flex justify-center gap-6 text-3xl">


<a href="https://github.com/UniStar903">

<FaGithub/>

</a>

<a href="https://linkedin.com/in/shardul-lote">

<FaLinkedin/>

</a>

</div>

</div>


</div>

)

}