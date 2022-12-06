var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function shift(n){
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}

function encode(message){
	let result = "";
	message = message.toLowerCase();
	for (let i = 0; i < message.length; i++){
			let index = alphabet.indexOf(message[i]);
			result += newalpha[index];
	}
	return result;
}

function decode(message){
	let result = "";
	message = message.toLowerCase();
	for (let i = 0; i < message.length; i++){
			let index = newalpha.indexOf(message[i]);
			result += alphabet[index];
	}
	return result;
}

const btn = document.querySelectorAll(".btn")
const k = document.querySelector(".k")
const btnK = document.querySelector(".btn1")
const message = document.querySelector('#message');
const result = document.querySelector('#result');
const decoded = document.querySelector('#decode')

btnK.addEventListener('click', ()=>{
	shift(+(k.value));
	console.log(k.value)
})

decoded.addEventListener('input', function handleChange(event) {
	if(k.value === ""){
		result.innerHTML = "You need set value of k";
	}
	else{
	shift(+(k.value));
	result.innerHTML = decode(event.target.value);
	}
});

message.addEventListener('input', function handleChange(event) {

	
	if(k.value === ""){
		result.innerHTML = "You need set value of k";
	}
	else{
	shift(+(k.value));
	result.innerHTML = encode(event.target.value);
	}
});


btn.forEach(e => {
	e.addEventListener('click', ()=>{
		shift(+(k.value));
		result.innerHTML = encode(message.value);
	})
})

