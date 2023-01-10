import {useState} from 'react'
//import AppContext from '../../store/appContext';
import Navbar from '../navbar/Navbar';
import AddPeople from '../sections/addPeople/AddPeople';
import AddRelationship from '../sections/addRelationship/AddRelationship';
import { Front } from '../sections/front/Front';
import Separation from '../sections/separation/Separation';



const Home:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle:any = () => {
        setIsOpen(!isOpen);
    }
   
    return (
        <>
          
            <Navbar toggle={toggle} />
            <Front />
            <AddPeople />
            <AddRelationship />
            <Separation />
            
        </>
    )
}

export default Home
