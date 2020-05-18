module.exports= {
    isEven: function(num){
        var res = num % 2;
        return ( res ==0 )
            
    },
    sum: function(num1, num2){
        return num1 + num2
    },
    greater: function(num1, num2){
        if(num1>num2){
            return num1
        }
            return num2
    },
    less: function(num1,num2){
        if(num1<num2)
            return num1;
        
        return num2;
    },
    divide: function(num1,num2){
        if(num2==0)
        return  console.log('error dont divide by 0')
        
        if(num2!=0)
        return num1 / num2
    },

    isOdd: function(num){
        var res = num % 2
        return( res==1)
    }
};

