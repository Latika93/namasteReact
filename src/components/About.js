import React from 'react';

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            son: "karan",
            secondSon: "Arjun",
        }
    }    

    render() {
        return (
            <div>
            About {this.props.name}. here..
            Famous son {this.state.son} and second son {this.state.secondSon}
        </div>
        )
    }
}



// const About = () => {
//     return <>dbfn</>;
// }
export default About;