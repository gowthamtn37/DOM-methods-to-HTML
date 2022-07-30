//creating in DOM
//firstname
//lastname
//email
//phonenumber






function createlabel (tag,attn,attv,content){
    let label = document.createElement(tag);
label.setAttribute(attn,attv);
label.innerHTML=content;
return label;
}

function createinput(tag,attn1,attv1,attn2,attv2){
     let input =document.createElement(tag);
input.setAttribute(attn1,attv1);
input.setAttribute(attn2,attv2);
return input;
}

function linebreak (breaker) {
    let b = document.createElement(breaker);
    return b;

}

var firstlb = createlabel("label","for","f","FIRST NAME");
var gap1 = linebreak("br");
var firstip = createinput("input","type","text","id","f");
var gap2 = linebreak("br");
var lastlb = createlabel("label","for","l","LAST NAME");
var gap3 = linebreak("br");
var lastip = createinput("input","type","text","id","l");
var gap4 = linebreak("br");

var emaillb = createlabel("label","for","email","E-mail");
var gap5 = linebreak("br");
var emailip = createinput("input","type","email","id","email");
var gap6 = linebreak("br");
var phnlb = createlabel("label","for","phone","Phone number");
var gap7 = linebreak("br");
var phnip = createinput("input","type","text","id","phone");
var gap8 = linebreak("br");
var button = createlabel("button","type","button","punch me");


document.body.append(firstlb,gap1,firstip,gap2,lastlb,gap3,lastip,gap4,emaillb,gap5,emailip,gap6,phnlb,gap7,phnip,gap8,button);