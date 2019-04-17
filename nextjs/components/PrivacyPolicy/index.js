import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../Title";
import Text from "../Text";

const PrivacyPolicyStyled = styled.div`
  p {
    padding-bottom: 15px;
  }
`;

const PrivacyPolicy = props => {
  return (
    <PrivacyPolicyStyled>
      <Title text='Privacy policy' />
      <Text text='In our new privacy policy, you clearly see what information we collect, why we do it, and how they are used, saved and protected.' />
      <Text
        text='The personal information we collect is primarily the ones you tell us (such as address, mobile number, etc.), for example, registering as a member or donating a gift through any of our channels. If we have received the information about you from someone else, we tell you where we received them from our first contact with you.
    '
      />
      <Text
        text='We use your personal information to send you newsletters and other information. They are also important in our analysis work to find more donors so that we can raise more money for the work for the children.
    '
      />
      <Text
        text='However, we do not share your personal information with others. They stay with us, except when we have agreements with a third party that maintains the same level of protection as we do. Examples of such parties may be companies that pass on payments, push and send our communications materials or otherwise are important to our business.
    '
      />
      <Text
        text='You are entitled to know what information we have about you in our records, to get them corrected or deleted, and you can say no to direct marketing communications from us.
    '
      />
    </PrivacyPolicyStyled>
  );
};

PrivacyPolicy.propTypes = {};

export default PrivacyPolicy;
