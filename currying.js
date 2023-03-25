//currying- one function returning another function and we want to call both of them

function volume (a)
{
    return function(b)
    {
        return function(c)
        {
            return a*b*c;
        }
    }
}
console.log(volume(4)(5)(6));
// this keyword in a afunction

this.table= 'window table';
const A =function() {
    console.log('cleaning ${this.table}');
}
A.call(this);

