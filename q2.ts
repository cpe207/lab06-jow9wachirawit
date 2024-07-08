// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const res1 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const userlink = res1.data;
  
    const res2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${userlink.userId}`);
    const user = res2.data;
    return {
      owner: user.name,
      title: userlink.title,
      completed: userlink.completed
    };
  } 
  catch(err){
   return "INVALID TODO ID"
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;


/*
รหัส นศ.: 660612156

ชื่อ-สกุล : วชิรวิทย์ ไชยมาตย์ 
*/