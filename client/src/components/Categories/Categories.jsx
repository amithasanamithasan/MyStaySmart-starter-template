import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";



const Categories = () => {
      // jodi amder url er moddhe params thake  category name jodi query thake
  const [params , setParams]=useSearchParams();
  // oonno je kono component e access korte parbo params.get kore 
    const category= params.get('category')
    console.log(category);
    return (
        <Container>
        <div className=" p-4 flex items-center justify-between overflow-x-auto ">
            {
        categories.map(items=> 
        (<CategoriesBox  key={items.label} 
        label={items.label} 
        icon={items.icon} 
        selected={category === items.label}
        >
       
        </CategoriesBox> 
    ))}
        </div>
        </Container>
    );
};

export default Categories;