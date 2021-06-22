import './App.css';
import React, {Component} from 'react'
import Header from "./components/header/Header.js"
import Menu from "./components/menu/Menu.js"
import Hotels from "./components/hotels/Hotels";
import LoadingIcon from "./components/UI/loadingicon/LoadingIcon";

class App extends Component {
    hotels = [
        {
            id: 1,
            name: 'Pensjonat',
            description: "Lorem ipsum, losowe słowa stworzone żeby stworzyć templatkę. Super!"
        },
        {
            id: 2,
            name: 'Hotel',
            description: "Lorem ipsum, losowe słowa stworzone żeby stworzyć templatkę. Super!"
        },
    ]
    state = {
        hotels: [],
        loading: true,
    }

    searchHandler(term) {
        //console.log(this)
        console.log("Wyszukano!", term)
        const hotels = [...this.hotels]
            .filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
        console.log(hotels)
        this.setState({hotels})
    }

    render() {
        return (
            <div className="App">
                <Header onSearch={(term) => this.searchHandler(term)}/>
                <Menu/>
                {this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/>}
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hotels: this.hotels})
            this.setState({loading: false})
        }, 1000)
    }
}

export default App;
