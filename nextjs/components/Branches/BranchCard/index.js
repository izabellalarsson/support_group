import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Title from '../../Title';
import Subheading from '../../Subheading'
import ReadMore from '../../ReadMore';
import Text from '../../Text'

const BranchCardStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 2vh;
    a {
        text-decoration: none;
        z-index: 998;
    }

    .where {
        margin-left: 30px;
        display: flex;
        align-items: center;
        margin-top: 15px;

        path {
            fill: var(--detail-red);
        }
    }

    section {
        display: flex;
        flex-direction: column;
        background: var(--main-bg);
        margin-top: -20px;
    }

    article {
        display: flex;
    }
    
    article .one {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 60%;

        p {
            padding-bottom: 0;
            padding: 4vh 30px;
        }
    } 

    article .two {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;

        
    }

    h2 {
        margin-left: 17px;
    }
`

const BranchCard = ({name, shortDescription, link, id, city, type}) => {
    return (
        <BranchCardStyle>
            <Link href={`/${type}/${link}`} ><a href={`/${type}/${link}`}><Title text={name}/></a></Link>
            <section>
                <div className="where">
                <svg height="21" width="17" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm.968 5.516a8.5 8.5 0 1 0-12.935 0L2 14l6.5 7 6.5-7-.032.016z" fill="#fff" fill-rule="evenodd"/></svg>
                    <Subheading text={city}/> 
                </div>

                <Text dangerouslySetInnerHTML={{__html: shortDescription}} text={shortDescription}/>
                <ReadMore id={id} link={link} type={type}/>
                <article>
                    <div className="one">
                    <Text text="Visit the Facebook page for more info"/>
                    </div>

                    <div className="two">
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.105 42C9.49842 42 0.10498 32.6066 0.10498 21C0.10498 9.39344 9.49842 0 21.105 0C32.7115 0 42.105 9.39344 42.105 21C42.105 32.6066 32.7115 42 21.105 42Z" fill="#3B5998"/>
<path d="M24.9683 22.8443H21.6732V33.5164H16.7552V22.8443H14.3945V18.664H16.7552V15.959C16.7552 14.041 17.6896 10.9918 21.7224 10.9918H25.3617V15.0246H22.706C22.2634 15.0246 21.6732 15.2213 21.6732 16.1558V18.6148H25.4109L24.9683 22.8443Z" fill="white"/>
</svg>
                    </div>
                </article>
            </section>
        </BranchCardStyle>
    );
};

export default BranchCard;
