var ary = [
    {fname:"Yahoo", lname : "Baba"},
    {fname:"Amu", lname : "Ratut"},
    {fname:"Karan", lname : "Sharma"}
];

var b = ary.map(Text);
document.writeln(b);

function Text (x) {
    return x.fname + " " + x.lname;
}