import { useEffect, useState } from "react/cjs/react.development";
import Cards from "../components/Cards";
import useFetch from "../helper/api";
import logo from '../static/images/loading.gif';

const List = () => {
    const [list, setList] = useState([]);
    const {response, loading} = useFetch({
        url : "https://picsum.photos/v2/list",
        target : null
    });

    useEffect(()=>{
        setList(response)
    }, [response]);


    const deleteTableRow = (id) => {
		if(id > -1){
            let findIndex = list.findIndex(function(item) {
                if(parseInt(item.id) === id)
                    return true;
            });
            list.splice(findIndex, 1);
        }
        setList([...list]);
    }
	

    return (
		
        <>
            {
                loading ? (
                    <img src={logo} alt="loading..." />
                ) : (
                    <>
						<div className="cardList">
							{list.map((ele, i) => {
								return (
									<Cards key={i} index={i} data={ele} onClickTableRow={deleteTableRow}/>
								)
							})}
						</div>
                    </>
                )
            }
        </>
    )
	
}


export default List;