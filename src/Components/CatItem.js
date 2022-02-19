import CatList from "./CatList"
function CatItem(){

    const handleClick = () =>{
        alert("Abyssinian")
    }

    return(
        <div onClick={()=>handleClick()}>
        <CatList data />
        </div>
    )
}

export default CatItem