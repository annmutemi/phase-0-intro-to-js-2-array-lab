// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let cat1 = [...cats, name]
    return cat1
}

function prependCat(name){
    let cat1 = [name, ...cats]
    return cat1
}

function  removeLastCat(){
    return cats.toSpliced(2)
}

function removeFirstCat(){
    return cats.toSpliced(0,1)
}

   
  
   





