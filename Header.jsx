import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
export const Header = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <>
        <div className={'bg-blue-500   p-4'}>
            <div className={'max-w-[1340px] border-2  mx-auto flex justify-between px-4'}>
                <div>
                    <h2 className={'text-2xl font-bold'}>Chironjit</h2>
                </div>
                {
                    toggle ?
                        <IoMdClose onClick={()=>setToggle(!toggle)} className={'text-amber-50 text-3xl md:hidden block'}/>
                        :
                        <LuMenu onClick={()=>setToggle(!toggle)} className={'text-amber-50 text-3xl md:hidden block'}/>
                }
                <div>
                    <ul className={'hidden md:flex gap-5 text-amber-50 '}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Card</a></li>
                    </ul>
                </div>

                {/*Responsive Menu */}
                <div>
                    <ul className={`md:hidden fixed text-amber-50 bg-black left-0 top-[70px] py-[14px] w-full h-screen  ${toggle ? 'left-[0]' : 'left-[-100%]' } `}>
                        <li className={'p-4'}><a href="#">Home</a></li>
                        <li className={'p-4'}><a href="#">About</a></li>
                        <li className={'p-4'} ><a href="#">Contact</a></li>
                        <li className={'p-4'}><a href="#">Card</a></li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}