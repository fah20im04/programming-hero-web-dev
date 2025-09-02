/**
 * class --> template
 * properties 
 * method( a speacial type of fuction without a keyword)
 * 
 * 
 * object --> 
 * 
 * 
 */

class Player {
     constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
       // console.log('calling the constructor',name)
     }
      goal(){
        console.log('scored a goal')
      }
      getTeamName(){
        return "anything"
      }
}

const player1 = new Player('stokes',33)
const player2 = new Player(' buttler',25)
console.log(player1)
console.log(player2)
player1.goal()