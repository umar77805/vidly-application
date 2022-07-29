import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
//
// import Counters from "./components/counters";
// import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import VidlyNavBar from "./components/vidlyNavBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/common/logout";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  // 	state = {
  // 		counters: [
  // 		  { id: 1, value: 0 },
  // 		  { id: 2, value: 0 },
  // 		  { id: 3, value: 0 },
  // 		  { id: 4, value: 0 },
  // 		],
  // 	  };

  // 	handleReset = () => {
  // 	const counters = this.state.counters.map((c) => {
  // 		c.value = 0;
  // 		return c;
  // 	});
  // 	this.setState({ counters });
  // 	};

  // 	handleIncreament = (counter) => {
  // 	const counters = [...this.state.counters];
  // 	const index = counters.indexOf(counter);
  // 	counters[index] = { ...counter };
  // 	counters[index].value++;
  // 	this.setState({ counters });
  // 	};

  // 	handleDecreament = (counter) => {
  // 	const counters = [...this.state.counters];
  // 	const index = counters.indexOf(counter);
  // 	counters[index] = { ...counter };
  // 	counters[index].value--;
  // 	this.setState({ counters });
  // 	};

  // 	handleDelete = (counterId) => {
  // 	let counters = this.state.counters.filter((c) => c.id !== counterId);
  // 	this.setState({ counters });
  // 	};

  // 	render() {
  // 		return (
  // 			<React.Fragment>
  // 				<Navbar
  // 					totalCounters={this.state.counters.filter(c => c.value > 0).length}
  // 				></Navbar>
  // 				<main className='container'>
  // 					<Counters
  // 						onIncreament={this.handleIncreament}
  // 						onDecreament={this.handleDecreament}
  // 						onDelete={this.handleDelete}
  // 						onReset={this.handleReset}
  // 						counters={this.state.counters}
  // 					></Counters>
  // 				</main>
  // 			</React.Fragment>
  // 		);
  // 	}
  // }

  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <VidlyNavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              exact
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
