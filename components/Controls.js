class Controls extends React.Component {

  constructor (props) {
    super(props);    
  }

  onClickStart(event) {
    event.preventDefault();
    this.props.start();
  }

  onClickStop(event) {
    event.preventDefault();
    this.props.stop();
  }

  onClickReset(event) {
    event.preventDefault();
    this.props.reset();
  }

  onClickAddL(event) {
    event.preventDefault();
    this.props.add();
  }

  onClickResetL(event) {
    event.preventDefault();
    this.props.resetList();
  }

  render() {
    return (
        <nav className={'controls'}>
            <a href={'#'} className={'button'} onClick={this.onClickStart.bind(this)} id={'start'}>Start</a>
            <a href={'#'} className={'button'} onClick={this.onClickStop.bind(this)} id={'stop'}>Stop</a>
            <a href={'#'} className={'button'} onClick={this.onClickReset.bind(this)} id={'reset'}>Reset</a>
            <a href={'#'} className={'button'} onClick={this.onClickAddL.bind(this)} id={'add'}>Add to list</a>
            <a href={'#'} className={'button'} onClick={this.onClickResetL.bind(this)} id={'resetList'}>Reset list</a>
        </nav>
    );
  }
}

