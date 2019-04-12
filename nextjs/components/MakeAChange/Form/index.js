import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import BlueLine from '../../BlueLine';

const FormStyled = styled.div`
    background-color: var(--main-bg);
    padding: 30px 40px;
    div:nth-child(2){
        margin-bottom: 16px;
        font-size: 14px; 
        color: var(--sub-bg); 
        display: flex;
        align-items: center;
        input{

            height: 25px;
            width: 25px;
            margin-right: 14px;
        }
        input:last-child{
            margin-left: 25px;
        }       
    }
    div:nth-child(3) {
        display: flex;
        flex-flow: column;
        input{
            padding-left: 10px;
            border: none;
            box-shadow: inset 1px 1px 3px var(--sub-bg);
            border-radius: 6px;
            margin-bottom: 16px;
            height: 34px;
            width: 80%;
            outline: none;
            color: var(--sub-bg);
            font-size: 14px;

            &::placeholder{
                color: var(--sub-bg);
                font-size: 14px;
            }
        }
        textarea{
            border: none;
            box-shadow: inset 1px 1px 3px var(--sub-bg);
            height: 90px;
            border-radius: 6px;
            padding-left: 10px;
            padding-top: 8px;
            margin-bottom: 15px;
            resize: none;
            outline: none;
            color: var(--sub-bg);
            font-size: 14px;

            &::placeholder{
                color: var(--sub-bg);
                font-size: 14px;
            }
        }
        
    }
    div:nth-child(4) {
        display: flex;
        justify-content: flex-end;

    }
    button{
        justify-self: end;
        align-self: end;

        justify-self: end;
    }
`


const Form = () => {
    return (
        <FormStyled>
            <form>
                <p>Let's collaborate!</p>
                <div>
                    <input name="contact" type="radio" />Private
                    <input name="contact" type="radio" />Company 
                </div>
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea type="text" placeholder="Message" />
                </div>   
                <div>
                    <Button text="Send" />
                </div>
                
            </form>    
        </FormStyled>
    );
};


export default Form;


// div {
//     background - color: red;
// }
/* color: var(--sub-bg);
display: flex;
flex-flow: column;  


textarea{
    border: none;
    box-shadow: inset 1px 1px 3px var(--sub-bg);
    height: 90px;
    border-radius: 6px;
    outline: none;

    &::placeholder{
        padding-top: 4px;
        padding-left: 9px;
        font-size: 14px;
        color: var(--sub-bg);
    }
}

div:first-child{
    display: flex;'
    inp
}
div:last-child {
    display: flex;
    flex-flow: column;
    input {
        height:34px;
        border: none;
        
        border-radius: 6px ;
        outline:none;
        margin-bottom: 16px;

    &::placeholder{
        padding-left: 10px;
        font-size: 14px;
        color: var(--sub-bg);
    }
} */