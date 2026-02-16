import { Facebook, Github, Instagram ,Tally1} from "lucide-react"
export const Footer = () => {

    return (
        <div className="flex md:flex-row text-indigo-500 justify-between  p-6 pt-16 bg-indigo-100">
            <p className="text-5xl pl-8">taskvive</p>
            <div className="mt-6">
                <p>1234567890</p>
                <p>xyz@gmail.com</p>
                <p>just location</p>
                <div className="flex text-black rounded-full gap-4 mt-5 flex-row">
                    <Facebook size={18} />
                    <Github size={18}/>
                    <Instagram size={18}/>
                </div>
            </div>

            <div className="mt-6 items-center">
                <div className="flex "><Tally1/>
                <p>Privacy Policy</p>
                </div>
                <div className="flex"><Tally1/>
                <p>Acessibility</p>  
                </div>
                <div className="flex"><Tally1/>
                <p>Statements</p>
                </div>
            </div>

            <div>
                <h3 className="text-3xl mt-6 mb-5">Stay Connected</h3>
                <h2 className="text-2xl">Email *</h2>
                <form className="">
                    <input className="border border-indigo-100 focus:outline-none focus:border-indigo-600 border-b-indigo-500" type="Email" />
                    <div className="pr-12 flex">
                        <p className="mt-3">Wanna Subscribe to newsletter</p>
                        <button className="ml-3 rounded-full border border-indigo-500 hover:bg-indigo-200  font-bold px-6 py-2">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}