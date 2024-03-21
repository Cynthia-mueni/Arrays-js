//Find the last element of the following arrays.arr1 = [3,7,34,90,12arr2 = [true,"green","where",12,56]
let arr1 = [3,7,34,90,12]
let arr2 = [true,"green","where",12,56]

console.log('last element',arr1.slice(-1))
console.log('lastelement',arr2.slice(-1))

//2
let myPets = ["Cow","Bird","Snake","Dog"];
let newText = myPets.toString();
console.log({newText})


//3
let arr3 = [-5,9,5,5,3,2,-3,6,8,4,1];
let newArr3 = arr3.sort();
console.log({newArr3})
//4

let arr = ["boy","man","girl","school","girl","woman"];
let newWord =[]
let duplicate=[]
arr.forEach(newWord =>{
    if(newWord.includes(word)){
        newWord.push(word)
    }
    else(duplicate.push(word))
});
console.log({newWord});
console.log({duplicate});

//5

let arr5 =["the","way","x"4]
const words = "way"
const wordIndex = arr5.indexOf(words);
if(words==arr5[1]){console.log({words})}
else{console.log("the search was not found")}
//6
let word = "renniw"
let newword =word.sort();
console.log({newword});
//7
let fruits=["Mango","grape","Avocado","Orange","Banana","guava","pears","plum","pineapple","kiwi"]
fruits[5]="Tomato";
console.log({fruits })