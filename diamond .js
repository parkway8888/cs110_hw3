
const diamond = function(number){
if (number%2 === 0){
	number = number + 1;
	}
let count = "";
let string = "";
let s1 = 1;
let space = (number - 1)/2;
let s2;

for(i = 1; i<=number; i= i+1){
	if(i>(number+1)/2)
{
		space = space + 2;
			for(let n = 1; n <= space; n = n + 1)
	{
				count += " ";
	}
					for (let star = s2; star >= 1; star = star - 1)
	{
						string += "*";
	}
	
	console.log(count+string);
	count = "";
	string = "";
	space = space - 1;
	s2 = s2 - 2;
}
else if (i<=(number+1)/2){
	for(let n = space; n > 0; n = n - 1)
{
	count += " ";
}
for (let star = 1; star <= s1; star = star + 1)
{
	string += "*";
}

console.log(count+string);
count = "";
string = "";
space = space - 1;
s1 = s1 + 2;
s2 = s1 - 4;
}
}
}

console.log(diamond(5));
