import { useState } from "react";
import Card from "../UI/Card";
import Button from "./Button";

const AddUsers =(props)=>{
const [enteredUser,setEnteredUser]=useState('');
const [enteredAge,setEnteredAge]=useState('');



   const addDataHandler=(event)=>{
       event.preventDefault();
       if(enteredUser.trim().length===0||enteredAge.trim().length===0){
           return;
       }
        
       if(+enteredAge<=0){
        alert("Error! Invalid input")
        return;
       }

       props.onAddUser(enteredUser,enteredAge);
       setEnteredAge('');
       setEnteredUser('');
   }
   const userChangeHandler=(event)=>{
       setEnteredUser(event.target.value);
   }
   const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
   }

    return(
        <Card>
        <form onSubmit= {addDataHandler}>
            <div>
            <label htmlFor="username">Username</label>
            </div>
           
            <input id="username" type="text" onChange={userChangeHandler} value={enteredUser}  ></input>
            <div>
            <label htmlFor="Age">Age</label>

            </div>
            
            <input id="Age" type="number" onChange={ageChangeHandler} value={enteredAge} ></input>
            <Button type="submit">Submit data</Button>
        </form>
        </Card>
    )
}

export default AddUsers;