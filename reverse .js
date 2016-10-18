let i = "";
let j = 1;

  const reverse = function(array){
    if ( j === array.length + 1){
		return "";
		}
	else if (j === array.length){
		return i += array[array.length-j]
		}
		i += array[array.length - j] + ", ";
		j = j + 1;
		reverse(array);
  }
  const reversedArray = function(array){
    reverse(array);
    console.log(i);
  }
  console.log(reversedArray(["A","B","C"]));
 