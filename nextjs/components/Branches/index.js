import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Branch from './Branch';

class Branches extends Component {
    state = {
        branches: []
    };
    componentDidMount() {
        
        
        
        this.fetchBranches();
        
    }
    // Fetch branches api
    fetchBranches = () => {
        const branchApi = 'http://sgn.test/wp-json/wp/v2/branch';
        fetch(branchApi)
            .then(res => res.json())
            .then(branches => {
                let branches2 = branches.map(branch => {

                    console.log(branch)
                    return ({
                        id: branch.id,
                        name: branch.title.rendered,
                        description: branch.content.rendered,
                        adress: branch.adress,
                        email: branch.email,
                        

                    })
                });
                console.log(branches2);
            })
    }



    render() {
        
        return (
            <div>
               <Branch />
            </div>
        );
    }
}

Branches.propTypes = {

};

export default Branches;