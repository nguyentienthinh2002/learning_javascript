
// Dau ra
	document.getElementById('demo').innerHTML = 'Hello';

	//document.write('Hello');

	document.getElementById('demo').innerHTML = 'Hello' + ' ' + 'Hi';

	alert('Xin chao');

//Khai bao bien

//Nếu bạn muốn có một quy tắc chung: luôn khai báo các biến có phần mở rộng const.
//Nếu bạn cho rằng giá trị của biến có thể thay đổi, hãy sử dụng let.
//var : Khai bao 1 bien (Neu su dung phien ban cu hon)


//let : Khai bao 1 bien khoi (phien ban moi).Các biến được xác định bằng letkhông thể được khai báo lại.
	let x,y;
	x = 6 + 10;
	y = x * 10;
	document.getElementById('demo2').innerHTML = y;

//const: Khai bao 1 hang so khoi
	const x1 = 5;
	const y1 = 6;
	document.getElementById('demo3').innerHTML = x1 + y1;

//Cac kieu du lieu

// Numbers:
	let length = 16;
	let weight = 7.5;

// Strings:
	let color = "Yellow";
	let lastName = "Johnson";

// Booleans
	let x2 = true;
	let y2 = false;

// Object:
	const person = {firstName:"John", lastName:"Doe"};

// Array object:
	const cars = ["Saab", "Volvo", "BMW"];

// Date object:
		const date = new Date("2022-03-25");

//Ham

	function Myfunction(p1,p2) {
		return p1*p2;
	}
	document.getElementById('demo4').innerHTML = Myfunction(4,3);


//Object

	let Name = {
		firstname : "Nguyen",
		lastname : "Thinh",
		age : '20'
	};

	document.getElementById('demo5').innerHTML = Name.firstname + " " + Name.lastname + " " + Name.age; 

		let Car = {
			name:"Lexus",
			year:'2001',
			fullName : function() {
		    	return this.name + " " + this.year; 
		  	}
		};

		
	document.getElementById('demo6').innerHTML = Car.fullName();

//Event js
	function DATE() {
		document.getElementById('demo7').innerHTML = Date();
	}

	//onmouseover : Di chuyen con tro chuot vao phan tu
	//onmouseout : Di chuyen con tro chuot ra khoi phan tu


//String: CHuoi

	let Hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let Hi1 = "We are \"Viking\""
	document.getElementById('demo8').innerHTML = Hi.length + " " + Hi1;

//String Method

	//slice(start,end), substr(start,length)

	var txt = "Thinh, Bim, Omai";
	var part = txt.slice(7,10);
	document.getElementById("demo9").innerHTML =part + " " + txt.substr(0,5);

	//replace(): thay thế một giá trị đã chỉ định bằng một giá trị khác trong một chuỗi
	function Replace() {
		let text = document.getElementById('demo').innerHTML;
		document.getElementById('demo').innerHTML = text.replace("Hello", "BlaBla");
	}

	//toUpperCase() : Chuyen thanh chu hoa
	//toLowerCase() : Chuyen thanh chu thuong
	//concat() : Thay the + . VD: let text3 = text1.concat(" ", text2);
	//trim() : Loai bo khoang trang
	// trimStart(): Loai bo khoang trang o dau cua chuoi, trimEnd() : Loai bo khoang trang cuoi chuoi
	// String charAt(): trả về ký tự trong string tương ứng với vị trí truyền vào
    // String charCodeAt(): trả về mã Unicode của ký tự trong string tương ứng với vị trí truyền vào
    // String split(): tạo ra một mảng từ một chuỗi

//String Search
	//indexOf() : Trả về chỉ số vị trí đầu tiên, lastIndexOf() : Trả về chỉ số vị trí cuối
	// 2 phương thức sẽ trả về -1 nếu ko tìm thấy chuỗi cần tìm
	let std = "Xin chao toi la NTT và NTT là tôi";
	document.getElementById("demo10").innerHTML = std.indexOf('NTT') + " " + std.lastIndexOf('NTT');

	//match(): Trả về giá trị tìm kiếm
	//includes() : Trả về true nếu tìm được gía trị chỉ định và ngược lại

//Array
	// let str = [
	// 	"Hello", 
	// 	"Hi", 
	// 	"Thinh"
	// ];
	//document.getElementById("demo11").innerHTML = str;	---------->Cach 1

	// const cars = [];
	// cars[0]= "Saab";
	// cars[1]= "Volvo";
	// cars[2]= "BMW";
	// document.getElementById("demo").innerHTML = cars;       ------>Cach 2


	 let str = new Array("Hello", "Hi", "Thinh");
	// document.getElementById("demo11").innerHTML = str;		//-------->Cach 3

	//Thay doi phan tu mang
		str[0] = "Xin chao";
		//document.getElementById("demo11").innerHTML = str[0];
	//Thuoc tinh mang
			// Do dai mang
				//document.getElementById("demo11").innerHTML=str.length;
			// Sap xep mang
				//document.getElementById("demo11").innerHTML=str.sort();
	//Vong lap cac phan tu trong mang
		// let flen = str.length;
		// let txt2 = "<ul>";
		// for(let i = 0; i < flen ; i++) {
		// 	txt2 += "<li>" + str[i] + "</li>"
		// }
		// txt2 += "</ul>";
		// document.getElementById("demo11").innerHTML = txt2;		-------->Cach 1

		let txt2 = "<ul>";
		str.forEach(Myfunction2);
		txt2 += "</ul>";

		function Myfunction2(value) {
			txt2 += "<li>" + value +"</li>";
		}
		document.getElementById("demo11").innerHTML = txt2;			//------->Cach 2

	// Them phan tu	vao cuoi mang : push()
		function Add() {
			str.push("Bim");
			txt2 = "<ul>";
			for(let i = 0; i < str.length ; i++) {
				txt2 += "<li>" + str[i] + "</li>"
			}
			txt2 += "</ul>";
			document.getElementById("demo11").innerHTML = txt2;
		}
	

	// phuong thuc mang(Array Menthod)
		//toString() : chuyen doi 1 mang thanh 1 chuoi gia tri cua mang ngan cach nhau bang dau ,
		//join(): tuong tu nhu to String() nhung co the chon dau ngan cach 
		//document.getElementById("demo").innerHTML = str.join(" * ");

		//pop() : Loai bo phan tu cuoi cua mang
		//shift() : Loai bo phan tu dau cua mang va thay doi vi tri sang chi so thap hon
		//spilce() : Them phan tu vao mang
			const fruits = ["Banana", "Orange", "Apple", "Mango"];
			document.getElementById("demo12").innerHTML = fruits;
			fruits.splice(2, 0, "Lemon", "Kiwi");					//2 : vi tri muon them, 0 : phan tu muon xoa
			document.getElementById("demo13").innerHTML = fruits;
		//concat() : hop nhat mang
			const myfruits = fruits.concat(str);
			document.getElementById("demo14").innerHTML = myfruits;
		//slice() : cat phan tu cua mang
			const citrus = fruits.slice(1);// cat ra 1 phan tu cua mang bat dau tu phan tu 1 (Orange)
			document.getElementById("demo15").innerHTML = citrus;
			const citrus2 = fruits.slice(1,3);// cat ra phan tu dau nhung khong bao gom phan tu ket thuc
			document.getElementById("demo16").innerHTML = citrus2;

	//Sap xep mang 
		//sort() : Sap xep mang theo bang chu cai
			document.getElementById("demo17").innerHTML = fruits.sort();
		//reverse() : Sap xep mang theo bang chu cai nguoc lai
			document.getElementById("demo18").innerHTML = fruits.reverse();
		//Mac dinh ham sort() sap xep cac gia tri duoi dang chuoi
		//Tuy nhien neu sap xep cac chu so duoi dang chuoi thi se gay ra nhieu sai xot. VD :25 >100 vi 2>1
		//Ta co the fix loi nay bang chuc nang so sanh

			const points = [40, 100, 1, 5, 25, 10];
			document.getElementById("demo18").innerHTML = points;
			function myFunction3() {
				document.getElementById("demo19").innerHTML = points.sort(function(a,b) {return a-b});
				//Khi function trong ham sort() chay no se tra ve cac gia tri {am , 0, duong }
				// neu ra am a duoc sap xep truoc b
				//neu ra duong a duoc sap xep sau b
				// neu = 0  thi khong thay doi
			}
			function myFunction4() {
				document.getElementById("demo19").innerHTML = points.sort();
			}
//DATE
	// new Date()
	// new Date(date string)

	// new Date(year,month)
	// new Date(year,month,day)
	// new Date(year,month,day,hours)
	// new Date(year,month,day,hours,minutes)
	// new Date(year,month,day,hours,minutes,seconds)
	// new Date(year,month,day,hours,minutes,seconds,ms)
	// new Date(milliseconds)
	//Js đếm ngày từ 0-11
	//Không thể không cung cấp tháng , nếu không nó sẽ truyền ra tham số miligiay tuy nhien ngay ISO thi dươc
	// năm 1,2 chữ số sẽ hiểu là 19xx
	//toDateString(): Chuyển về chuỗi string dễ đọc hơn
	const d = new Date(23,1,5,10,40,20);//năm,tháng,ngày,giờ,phút,giây
	document.getElementById("demo20").innerHTML = d.toDateString();

