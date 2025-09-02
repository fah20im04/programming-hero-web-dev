// callback
function pakhiBai(callMeBack,patro, patri){
    console.log('value of patro',patro)
    console.log('callMeBack parameter',callMeBack)
    if(patri ){
        callMeBack(patro)
        // console.log(callMeBack)
    }else{
        console.log('tor kopale bia nai')
    }
}
function callsSomeOne(person){
    console.log('calling',person)
}

// callsSomeOne('jodu')
pakhiBai(callsSomeOne,'kobu','nayika')