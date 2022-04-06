const countChars = (obj) => {
    
        const target = obj.target;
        const inputName = target.getAttribute('name');
        const longMax = target.getAttribute('maxlength');
        const longAct = target.value.length;

        if(longAct < longMax){
            document.getElementById(inputName).innerHTML= `${longAct}/${longMax}`;
        }else{
            document.getElementById(inputName).innerHTML= `<span style="color: red;">${longAct}/${longMax}</span>`
        }
}

export default countChars;