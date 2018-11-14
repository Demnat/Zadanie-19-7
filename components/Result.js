class Result extends React.Component {

    constructor (props) {
        super(props); 
    }
    
    render() {
        return (
            <li>{this.props.time}</li>   
        );
    }
}

