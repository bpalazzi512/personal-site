import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import headshot from '../../public/headshot-no-bg.png';
import Image from 'next/image'

export function About() {

    return (
        <div className="w-full flex flex-col items-center max-w-3xl h-[100vh]">
            <Image src={headshot} alt="" className="rounded-full object-cover w-60 h-60 border-2 border-gray-400 mt-12"/>
            <h1 className="font-semibold text-3xl mt-2">Hi, I&apos;m Bobby</h1>
            
            <h2 className="px-4 mt-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi excepturi natus earum! Eveniet ab magnam ad eum modi maiores dolorem nesciunt dolores quia quisquam similique voluptatem quam animi consectetur asperiores praesentium quaerat ipsum consequatur tenetur, expedita, exercitationem a atque nostrum. Consequatur distinctio ex ad maiores eaque pariatur, sequi totam!
            </h2>
            <div className="flex flex-row mt-6">
                <a href="https://www.linkedin.com/in/bobby-palazzi/" className=" bg-[#0a66c2] px-3 py-1 rounded-md flex flex-row items-center justify-between mr-4 ">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" style={{color: "white"}}/>
                    <h3 className="text-white text-lg ml-4">LinkedIn</h3>
                </a>

                <a href="https://www.linkedin.com/in/bobby-palazzi/" className=" bg-[#2b3137] px-3 py-1 rounded-md flex flex-row items-center justify-between">
                    <FontAwesomeIcon icon={faGithub} size="1x" style={{color: "white"}}/>
                    <h3 className="text-white text-lg ml-4">Github</h3>
                </a>
            </div>
            <a href="" className="bg-slate-100 px-4 rounded-md h-12 flex items-center justify-center mt-4">
                <h3 className="text-black text-lg">Resume Download</h3>
            </a>
        </div>
    )
}