let obj = [{name: "Dhanjiv", ranking: 2}, {name: "rob", ranking: 3}, {name: "cob", ranking: 1}];

function ranking(obj)
{
	
var output = obj
	.map(obj => obj.ranking)
    .sort((a, b) => a - b);
	
	return output;

}

const getAverage = (arr) => {
  return arr.reduce((total,current) => total += current.ranking,0) / arr.length
}


console.log(ranking(obj)); 

const sum = obj.reduce((total,current) => total += current.ranking,0)
console.log(getAverage(obj));
