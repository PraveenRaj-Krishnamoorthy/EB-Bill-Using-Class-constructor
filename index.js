class classes{
    constructor(name,prev,curr,opt){
        this.n = name;
        this.p = prev;
        this.c = curr;
        this.o = opt;
    }
    condition(){
        this.unit = this.c - this.p;
        if (this.o==1) {
            this.amount = this.unit*2;
        } else {
            this.amount = this.unit*4;
        }
        if (parseInt(this.p)>parseInt(this.c)) {
            alert("Previous should be less than current!");
            location.reload();
        }
        if (this.n=="" || thhis.p==""||this.c=="") {
            alert("Please enter all fields!")
            output.innerHTML=""
            location.reload();
        }
    }
    display(){
        let output = document.querySelector(".show");
        output.innerHTML=`
        Name: ${this.n}<br>
        Previous: ${this.p}<br>
        Current: ${this.c}<br>
        For: ${this.o==1?"Home":"Office"}<br>
        Unit Used: ${this.unit}<br>
        Amount: ${this.amount}`;
    }
}

const func=()=>{
    let form = document.forms["formData"];
    let user = form["user"].value;
    let pR = form["pR"].value;
    let cR = form["cR"].value;
    let opt = form["options"].value;
    let eb = new classes(user,pR,cR,opt);
    eb.condition();
    eb.display();
}