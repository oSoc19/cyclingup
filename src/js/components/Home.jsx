import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Map from '../components/Map/';
import Chart from "../components/Charts/index";



class FullpageWrapper extends Component {
	render() {
		return (
			<ReactFullpage
				navigation
				sectionsColor={["#FFF", "#FFF", "#FFF"]}
				render={() => {
					return (
						<div>
						    <section className="section">
                                <Map />
							</section>
                            <section className="section">
                                <Chart />

							</section>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullpageWrapper;