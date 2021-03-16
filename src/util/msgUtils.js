function fn() { 
  this.test=function(string){
  alert(string)
  }
}; 
module.exports = fn;

