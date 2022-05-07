import axios from "axios";
const id_user = JSON.parse(localStorage.getItem("user"))
 let info =axios.get(`https://profile-json-server.herokuapp.com/todos`)
	.then(res => {
			res.data.map( result =>{
				if (result.user == id_user.id){
				  return result
				}
			})
		}
	);
console.log(info)