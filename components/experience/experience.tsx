import Image from 'next/image'
import wkLogo from '../../public/wkLogo.png';
import khouryLogo from '../../public/khouryLogo.png';

export function Experience() {

    return (
        <div id="experience" className='min-h-screen scroll-mt-15'>
            <div className="w-full text-left p-2">
                <h1 className="font-extrabold text-xl">Experience</h1>
            </div>

            <div className='w-full h-full flex flex-col items-center justify-center max-w-4xl'> 
                <div className='w-full flex flex-row items-center justify-between'>
                    <Image src={wkLogo} alt="" className=" bg-white w-20 h-auto"/>
                    <div className='w-full'>
                        <h2>DevOps Software Engineer Co-op</h2>
                        <h3>Wolters Kluwer</h3>
                        <h4>January 2025 - Present</h4>
                    </div>
                </div>
                <div className="w-full" >
                    <div className='flex w-full'>
                        <div className="w-0.5 rounded-3xl bg-black ml-10 mr-12"></div>
                        <ul className='list-disc flex-1 pt-2 pb-6 pr-2 space-y-1.5'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores unde saepe vitae libero ratione necessitatibus consectetur voluptatem velit, sunt quis ipsum, dolorum, a assumenda ea blanditiis earum cupiditate sed?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis rerum praesentium culpa qui explicabo accusamus. Totam, impedit. Totam temporibus ab sapiente fugiat earum vitae aliquam cumque est, ipsa repellat.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione ea praesentium! Rem similique praesentium accusantium sint voluptatum ullam veniam possimus quisquam consequatur voluptate minima nostrum odit, molestias mollitia doloremque.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <Image src={khouryLogo} alt="" className=" bg-white w-12 ml-4 mr-4 h-auto"/>
                    <div className='w-full'>
                        <h2>Student Innovation Developer</h2>
                        <h3>Khoury College</h3>
                        <h4>June 2024 - December 2024</h4>
                    </div>
                </div>
                <div className="w-full">
                    <div className='flex w-full'>
                        <div className="w-0.5 rounded-3xl bg-black ml-10 mr-12"></div>
                        <ul className='list-disc flex-1 pt-2 pb-2 pr-2'>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repellat quaerat odio repudiandae explicabo vel iusto, magni, animi, placeat quidem dolore molestiae laboriosam! Dolor soluta, facilis odit non optio vitae!</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatem consequatur accusamus nisi, magni atque itaque cumque dolorum quibusdam quis error repudiandae, rem minus quae, non eius. Laudantium, nesciunt quod!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deleniti aspernatur. Temporibus animi delectus commodi dolores. A, exercitationem repellendus! Nisi repudiandae quas repellendus laborum dicta soluta labore libero nesciunt distinctio?</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}