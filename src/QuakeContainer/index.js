import React, { Component } from 'react'


export class QuakeContainer extends Component {
	constructor() {
		super();

		this.state= {
			quakes: []
		}
	}

	getQuakes = async () => {
		try {
			const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')

			const parsedQuakes = await quakes.json()
			console.log('this is the parsed quakes', parsedQuakes)

			this.setState({
				quakes: parsedQuakes.features
			})				
			console.log('this is the quakes array', this.state.quakes)

		} catch(err){
			console.log(err)
		}
	}

	showQuakes(){
		const returnedQuakes = this.state.quakes.map((quakes, i) => {
			return (<div key={i}>
				<span>M{quakes.properties.mag} {quakes.properties.place}</span>

			</div>)
		})
		// console.log(returnedQuakes.id)
		return returnedQuakes

	}
// return this.state.quakes.map((quakes) => {
// 			console.log(quakes)
// 		})
	componentDidMount(){
		this.getQuakes()
	}

	render(){
		return(
			<React.Fragment>
				{this.showQuakes()}
			</React.Fragment>
			)
	}
}


export default QuakeContainer