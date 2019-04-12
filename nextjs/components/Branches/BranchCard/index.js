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
    a {
        text-decoration: none;
        z-index: 998;
    }

    i {
        color: var(--detail-red);
        margin-right: 10px;
    }

    .where {
        margin-left: 30px;
        display: flex;
        align-items: center;
        margin-top: 15px;
    }

    section {
        display: flex;
        flex-direction: column;
        background: var(--main-bg);
        margin-top: -20px;
    }

    .fa-exclamation-circle {
        font-size: 42px;
        color: var(--facebook-bg);
        align-self: flex-end;
        margin: 30px;
    }

    article {
        display: flex;
    }
    
    article .one {
        display: flex;
        align-items: center;
        background: #fff;
        width: 60%;
    } 

    article .two {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }
`

const BranchCard = ({name, shortDescription, link, id, city, type}) => {
    return (
        <BranchCardStyle>
            <Link id={id} href={`/${type}/${link}`} ><a href={`/${type}/${link}`}><Title text={name}/></a></Link>
            <section>
                <div className="where">
                    <i class="fas fa-map-marker-alt"></i>
                    <Subheading text={city}/> 
                </div>

                <Text dangerouslySetInnerHTML={{__html: shortDescription}} text={shortDescription}/>
                <ReadMore id={id} link={link} type={type}/>
                <article>
                    <atricle className="one">
                    <Text text="Visit the Facebook page for more info"/>
                    </atricle>

                    <article className="two">
                        <i class="fas fa-exclamation-circle"></i>
                    </article>
                </article>
            </section>
        </BranchCardStyle>
    );
};

export default BranchCard;
