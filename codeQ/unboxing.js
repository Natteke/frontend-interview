let a = "text";
a.anyProp = 1;
// console.log(a.anyProp); // ???


let a = new String("text");
a.anyProp = 1;
// console.log(a.anyProp);  // ???















/*
    Ответ:
    будет undefined, потому что обьект который создается после анбоксинга будет удален
 */
