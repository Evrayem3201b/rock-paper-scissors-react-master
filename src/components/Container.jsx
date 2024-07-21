
import Game from "./Game.jsx"

export default function Container(){
    return (
        
            <>
                {/* <div className="bg-[#00000038] m-auto top-0 left-0 bottom-0 right-0 absolute w-full h-full"><img src="/src/assets/images/icon-close.svg" className=" z-50 m-auto top-0 left-0 bottom-0 right-0 absolute" alt="close" /><img src="/src/assets/images/image-rules.svg" className="bg-white p-10 rounded-md z-50 m-auto top-0 left-0 bottom-0 right-0 absolute" alt="rules" /></div> */}
                <main className="min-h-screen relative max-w-[700px] pt-8 my-0 mx-auto">
                <Game />
                <footer className="absolute bottom-0 right-0 pb-5 pr-5">
                    <button className="outline-none font-barlow uppercase tracking-widest font-normal bg-transparent text-sm rounded-md border border-outline hover:border-white focus:border-white transition px-5 py-1">rules</button>
                </footer>
                </main>
            </>
        
    )
}