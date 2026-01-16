const username=new Object();
username.firstName="John";
username.lastName="Doe";
username.getFullName=function(){
    return this.firstName+" "+this.lastName;
}
console.log(username);