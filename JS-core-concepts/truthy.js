let data;
data = 0;
data = '';
data = '0 ';
data = false;
data= true;
data = null;
data = {};
data = []
console.log('value of data', data)

if(data){
    console.log('value of data os truthy')
}else{
        console.log(data,'is falsy')

}

// if i need to capture the falsy value  to go inside if block ---> use logical not !data
if(!data){

}