class students {
    constructor(name,age,marks)
    {
        this.name=name;
        this.age=age;
        this.marks = marks;

    }
    eligibility(x)
    {
       return (min) => // fat arrow function
        {
            if(this.age>=min && this.marks>=40)
           {
            console.log(this.name + "is eligible");
           }
            else
            {
            console.log(this.name + " is not eligible");
            } 
           
        }
    }
}


const A = new students("harry",22,75);
const B = new students("Ron",23,65);
const C = new students("hermoine",22,95);

A.eligibility(21)(70);
// normal function looks at current object calling that function where as fat arrow function
// looks at the object which is in the lexical scope of it.


//pending

