import React from 'react';
import ChirpItem from './components/ChirpItem.jsx';


import { v4 as uuidv4 } from 'uuid';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
            ,chirp: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirp: [
                    ...this.state.chirp, 
                    { id: uuidv4(), task: 'Tristan - I want to go to school'},
                    { id: uuidv4(), task: 'Jake - It is my last week'},
                    { id: uuidv4(), task: 'Josh - No morning checkin tomorrow'},
                    { id: uuidv4(), task: 'Garrett - Submit your labs'},
                ]
            });
        }, 2000);     
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
            task: '', 
            chirp: [...this.state.chirp, {id: uuidv4(), task: this.state.task }] 
        });
    }

    render ()  {
        return (
            <div>
              <h1>Welcome to Chirper!!!</h1>
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Chirp:</label>
                            <input
                                value={this.state.name}
                                onChange={e => this.setState({ task: e.target.value })}
                                className="form-control"
                            />
                            <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mt-3">
                                Post Chirp
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify content center mt-3">
                    <div className="col md 6">
                        <ul className="list-group">
                            {this.state.chirp.map(chirp => (
                                <ChirpItem key={`chirp-name-${chirp.id}`} chirp={chirp} />
                            ))}
                        </ul>
                    </div>
                </section>
                <h3></h3>
            </div>
        );
    }
}

export default App