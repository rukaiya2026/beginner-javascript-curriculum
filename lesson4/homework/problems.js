// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.
let a = ["apple","banana","grape"];
console.log(a.length -1);
    a.reverse();
console.log(a);


// Problem 2
// Create a list of 4 school subjects.
// Print the second subject.
// Then sort them alphabetically and print the result.
let b =["math","science","scocial studies","literature"]
console.log(b[1])
    b.sort();
console.log(b)


// Problem 3
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.
let c = ["400","401","402","403","404"]
console.log(c.length)
    c.index();
console.log(index0f["403"]);

// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.

let languages = ["JavaScript", "Python"];
console.log(languages[Math.floor(Math.random() * languages.length)]);

languages.push("Java");

console.log(languages);



// Problem 5
// Create a list of 6 passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.
let e = ["password","633634","898989","raonaf","090909","595959"]

console.log(passwords[Math.floor(passwords.length / 2) - 1]);

passwords.shift();

console.log(passwords);

