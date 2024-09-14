import { useNavigate, useSearchParams } from "react-router-dom";

import queryString from 'query-string';

const CategoriesBox = ({label, icon:Icon ,selected}) => {
    console.log(selected);

const [params , setParams]=useSearchParams();
// ultametly url change korar jono use korlama navigate

// query-string packeg libarey use kore url e ?category=value set korbo 
const navigate= useNavigate();

const handelequeryserch=()=>{
    // console.log(label);
    let currentQuery = {}

    if (params){
        // string thake  convert kore object banie a  currentQuery moddhe rakte ci
        currentQuery= queryString.parse(params.toString());

        const updatedQuery={...currentQuery, category: label }
        const url= queryString.stringifyUrl({
            url:'/',
            query:updatedQuery,

        })
        navigate(url);
    }



}

params.get('category');
    return (
        <div onClick={handelequeryserch} 
         className={`  
        flex flex-col items-center 
        justify-center 
        gap-2 p-3 border-b-2 
        hover: text-neutral-900 
        transition-all  cursor-pointer  
        ${selected?'border-b-indigo-700 text-green-500' :''} `}
        >
     <Icon size={26}></Icon>
        <div className="text-sm font-medium">
        {label}
        </div>
        
        </div>
        
    );
};

export default CategoriesBox;