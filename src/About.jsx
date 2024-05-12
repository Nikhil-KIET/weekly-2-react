import { useState } from "react";

function About(){
    const [about, setAbout] = useState(false);

    function clickHandler(){
        setAbout(!about);
    }
    
    return(
        <div className=" flex flex-col gap-8 items-center" >
            <h1 className="text-left text-2xl font-bold" >ABOUT ME</h1>
           <div className=" rounded-md bg-orange-300 text-center p-4  ">
           <div>
                {
                    about && (<p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.

                    Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
                    
                    In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
                    
                    If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.</p>)
                }
                {
                    !about && (<p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>)
                }

            </div>
            <br />
            <button className="text-center animate-bounce" onClick={clickHandler}>{about ? (<p>Read Less</p>):(<p>Read More</p>)}</button>
           </div>
           <h1>Primary Focus</h1>

            <div className=" flex  items-center flex-wrap justify-evenly gap-4   ">
                
                <div className="flex py-8  bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>

            </div>



            <h1>Primary Focus</h1>

            <div className=" flex  items-center flex-wrap justify-evenly gap-4   ">
                
                <div className="flex py-8  bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>
                <div className="flex p-8 bg-red-300 rounded-md w-[40%] "><img src="" alt="" />
                <div className=" flex flex-col ">
                <h1>Web Design & Development</h1>
                <p>Web development icon
Web Design & Development
Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
                </div>

                





                

            </div>







            
            
        </div>



//yum yum

    )
}
export default About;