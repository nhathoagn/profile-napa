

let obj ="{\n" +
	"\t\"id\": 1,\n" +
	"\t\"first_name\": \"Bao\",\n" +
	"\t\"last_name\": \"Nguyen\",\n" +
	"\t\"email\": \"bao@gmail.com\",\n" +
	"\t\"age\": \"22\",\n" +
	"\t\"phone_number\": \"0922763576\",\n" +
	"\t\"address\": \"Quang Nam\",\n" +
	"\t\"gender\": \"Male\",\n" +
	"\t\"password\": \"12345678\",\n" +
	"\t\"role\": \"user\",\n" +
	"\t\"avatar\": \"https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png\",\n" +
	"\t\"todo\": [\n" +
	"\t\t{\n" +
	"\t\t\t\"todoId\": 1,\n" +
	"\t\t\t\"title\": \"Lâu Nhà\",\n" +
	"\t\t\t\"completed\": false\n" +
	"\t\t},\n" +
	"\t\t{\n" +
	"\t\t\t\"todoId\": 2,\n" +
	"\t\t\t\"title\": \"Lâu Nhà\",\n" +
	"\t\t\t\"completed\": false\n" +
	"\t\t},\n" +
	"\t\t{\n" +
	"\t\t\t\"todoId\": 3,\n" +
	"\t\t\t\"title\": \"Lâu Nhà\",\n" +
	"\t\t\t\"completed\": false\n" +
	"\t\t}\n" +
	"\t]\n" +
	"}"
let date = JSON.parse(obj)
console.log(date.todo)
date.todo.map( e =>{
	if (e.todoId === 2){
		let index = date.todo.indexOf(e)
		date.todo.splice(index,1)
		console.log(date.todo)
		date.todo.push(e)
	}
} )
console.log(date)