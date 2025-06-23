import { Github, LinkedinIcon } from 'lucide-react';
import headshot from '../../public/headshot-no-bg.png';
import Image from 'next/image'
import { WavyUnderline } from '../ui/wavy-underline';

export function About() {

    return (
        <div id="about" className="min-h-screen w-full flex flex-col items-center max-w-3xl scroll-mt-15">
            <Image src={headshot} alt="" className="rounded-full object-cover w-60 h-60 border-2 border-gray-400 mt-12"/>
            <h1 className="font-semibold text-3xl mt-2">Hi, I&apos;m Bobby</h1>
            
            <h2 className="px-4 mt-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi excepturi natus earum! Eveniet ab magnam ad eum modi maiores dolorem nesciunt dolores quia quisquam similique voluptatem quam animi consectetur asperiores praesentium quaerat ipsum consequatur tenetur, expedita, exercitationem a atque nostrum. Consequatur distinctio ex ad maiores eaque pariatur, sequi totam!
            </h2>
            <div className="flex flex-row mt-6 p-4 min-w-36 justify-between">
                <a href="https://www.linkedin.com/in/bobby-palazzi/" className='transition-transform duration-100 hover:scale-110'>
                    <LinkedinIcon color='#0a66c2' size="40px"/>
                </a>

                <a href="https://www.github.com/bpalazz512" className='transition-transform duration-100 hover:scale-110'>
                    <Github color='#2b3137' size="40px" />
                </a>
                
                
            </div>
            <a href="" className="px-3 py-1 rounded-md h-12 flex items-center justify-center mt-4 relative group">
                <h3 className="text-black text-lg">
                    <WavyUnderline className="space-y-1 transition-transform duration-100 hover:scale-110"> 
                        <p className="">Download My Resume</p>
                    </WavyUnderline>
                </h3>
            </a>
        </div>
    )
}