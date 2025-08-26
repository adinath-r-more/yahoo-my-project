var a = {
    fname : 'Rakes',
    lname : 'More',
    age : 28,
    fullname : function() {
        return this.fname + " Bhau " + this.lname;
    }
}
document.writeln(a.fullname());
