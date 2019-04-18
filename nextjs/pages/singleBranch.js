import React, { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Title from "../components/Title";
import Text from "../components/Text";
import ActivityName from "../components/Branches/ActivityName";
import BlueLine from "../components/BlueLine";
import styled from "styled-components";
import LoadingPage from "../components/LoadingPage";

const BranchPageStyled = styled.div`
  h1  {
    margin-bottom: 4vh;
  }
`;
const ActivityCardStyled = styled.div`
  background-color: ${props =>
    props.blueBackground ? "var(--main-bg)" : "white"};
  p {
    margin: 0;
  }
`;

class BranchPage extends Component {
  constructor(props) {
    super();
    const slug = props.url.query.slug;
    const newBranch = props.branches.filter(branch => {
      return branch.slug === slug;
    });

    this.state = {
      notFound: false,
      branch: newBranch[0],
      activities: [],
      blueBackground: true,
      isLoading: true
    };

    // Check if slug excists
    if (newBranch.length < 1) {
      this.state = {
        notFound: true
      };
    } else {
      const activitiesApi = this.state.branch._links["wp:term"][0].href;
      fetch(activitiesApi)
        .then(res => res.json())
        .then(activities => {
          this.setState({
            activities: activities
          });
        });
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  getBackgroundColor = () => {
    this.state = {
      blueBackground: !this.state.blueBackground
    };
    return !this.state.blueBackground;
  };

  render() {
    return (
      <Layout>
        {this.state.isLoading && <LoadingPage />}
        <BranchPageStyled>
          {this.state.notFound && (
            <div>
              <Title text={"Branch Not Found"} />
              <Text text='Please try again' />
            </div>
          )}

          {!this.state.notFound && (
            <div>
              <Title
                text={`Activities in ${this.state.branch.title.rendered}`}
              />
              <BlueLine />
              {this.state.activities.map((activity, i) => {
                return (
                  <ActivityCardStyled
                    blueBackground={this.getBackgroundColor()}
                    key={i}
                  >
                    <ActivityName text={activity.name} />
                    <Text text={activity.description} />
                  </ActivityCardStyled>
                );
              })}
            </div>
          )}
        </BranchPageStyled>
      </Layout>
    );
  }
}

BranchPage.getInitialProps = async function() {
  const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/branch`);
  const data = await res.json();
  return {
    branches: data
  };
};

export default BranchPage;
