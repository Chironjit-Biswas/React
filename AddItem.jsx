import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
export const AddItem = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddMe = () => {
      list.push(item)
        setList([...list])
    }
    const Remove = (index) => {
      list.splice(index,1)
        setList([...list])
    }

    return (
        <>
            <h2>Add Some Item</h2>
            <hr/>

            <input onChange={(e)=>setItem(e.target.value)} type="text" name="" id="" placeholder={"Add Items"}/>
            <button onClick={AddMe} className={"btn btn-outline-danger mt-5"} type={"submit"}>Add Item</button>
            <h3 className={"mt-5"}>Your All Items</h3>
            <hr/>
            <table className={"table table-striped m-4"}>
                <tbody >
                {
                    list.length!==0?(
                        list.map((element,index)=>{
                            return(
                                <tr key={index.toString()}>
                                    <td className={"mt-3"}>{element}</td>
                                    <td onClick={()=>{Remove(index)}} className={"btn btn-outline-danger p-2 " }>Remove</td>
                                </tr>
                            )
                        })
                    ):
                     (<tr>
                        <td></td>
                    </tr>)
                }
                </tbody>
            </table>
        </>
    )
}