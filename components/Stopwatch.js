class Stopwatch extends React.Component {

    constructor() {  
        super();
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: []
        };

    }

    reset() {
        this.setState({
            times:{
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    pad0 (value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    format(times) {
        console.log(this.pad0(times.minutes));
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
    }

    //print() { <- to chyba robi render ?
        
    // }  

    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
        this.setState({times: this.state.times});
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    start() {
        console.log(this.state.running);
        if (!this.state.running) {
            this.setState({running: true});
            // this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    stop() {
        this.setState({running: false});
        // this.state.running = false;
        clearInterval(this.watch);
    }

    resetCounter() {
        if (!this.state.running) {
            this.reset();
           // this.print();   jak wyżej
        }
    }

    add() {
        this.setState({
            results: [...this.state.results, this.format(this.state.times)]   //dodanie nowego stanu do tablicy
        });
    }

    resetList() {
        this.setState({
            results: []
        });
    }

    render() {
        return (
            <div className={'container'}>
                <Controls 
                    start={this.start.bind(this)} 
                    stop={this.stop.bind(this)} 
                    reset={this.reset.bind(this)} 
                    format={this.format.bind(this)}
                    resetList={this.resetList.bind(this)}
                    add={this.add.bind(this)}
                    times={this.state.times} 
                />
                <div className={'stopwatch'}>
                    {this.format(this.state.times)}
                </div>
                <Results results={this.state.results}/>
            </div>
        );
    }

}

stopwatch = <Stopwatch />;