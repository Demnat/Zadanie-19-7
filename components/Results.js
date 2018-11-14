class Results extends React.Component {

    constructor (props) {
      super(props);    
    }

    render() {
        const list = this.props.results.map((value) => {
            return (
                <Result time={value} />
            );
        })

        return (
            <ul className={'results'} id={'resultsList'}>
                {list}
            </ul>
        );
    }

}  