import React, { Component } from 'react';
import { css } from 'emotion';
import shortid from 'shortid';

import ResumeFooter from './ResumeFooter';

import {
	_grey,
	_html,
	_css,
	_javaScript,
	_php,
	_python,
	_sass,
	_react,
	_redux,
	_emotion,
	_nodejs,
	_mongoDB
} from '../lib/vars';

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: undefined,
			color: undefined,
			experience: undefined,
			startDate: Date.parse('April 01, 2016'),
			stack: [
				{
					name: 'HTML',
					className: '_HTML',
					startDate: Date.parse('April 01, 2016'),
					endDate: Date.now(),
					backgroundColor: _html,
					offset: '0px'
				},
				{
					name: 'CSS',
					className: '_CSS',
					startDate: Date.parse('May 01, 2016'),
					endDate: Date.now(),
					backgroundColor: _css,
					offset: '16px'
				},
				{
					name: 'JavaScript',
					className: '_JavaScript',
					startDate: Date.parse('September 01, 2016'),
					endDate: Date.now(),
					backgroundColor: _javaScript,
					offset: '-16px'
				},
				{
					name: 'PHP',
					className: '_PHP',
					startDate: Date.parse('October 30, 2016'),
					endDate: Date.parse('August 25, 2017'),
					backgroundColor: _php,
					offset: '-32px'
				},
				{
					name: 'Python',
					className: '_Python',
					startDate: Date.parse('March 04, 2018'),
					endDate: Date.parse('April 07, 2018'),
					backgroundColor: _python,
					offset: '64px'
				},
				{
					name: 'Sass',
					className: '_Sass',
					startDate: Date.parse('June 11, 2017'),
					endDate: Date.parse('November 06, 2017'),
					backgroundColor: _sass,
					offset: '32px'
				},
				{
					name: 'React',
					className: '_React',
					startDate: Date.parse('August 13, 2017'),
					endDate: Date.now(),
					backgroundColor: _react,
					offset: '-48px'
				},
				{
					name: 'Redux',
					className: '_Redux',
					startDate: Date.parse('December 31, 2017'),
					endDate: Date.now(),
					backgroundColor: _redux,
					offset: '-32px'
				},
				{
					name: 'Radium',
					className: '_Radium',
					startDate: Date.parse('December 31, 2017'),
					endDate: Date.parse('July 15, 2018'),
					backgroundColor: _grey,
					offset: '32px'
				},
				{
					name: 'Emotion',
					className: '_Emotion',
					startDate: Date.parse('July 15, 2018'),
					endDate: Date.now(),
					backgroundColor: _emotion,
					offset: '32px'
				},
				{
					name: 'Node',
					className: '_Nodejs',
					startDate: Date.parse('August 13, 2017'),
					endDate: Date.now(),
					backgroundColor: _nodejs,
					offset: '-64px'
				},
				{
					name: 'MongoDB',
					className: '_MongoDB',
					startDate: Date.parse('August 13, 2017'),
					endDate: Date.now(),
					backgroundColor: _mongoDB,
					offset: '48px'
				}
			]
		};

		this.getStats = this.getStats.bind(this);
	}

	getStats(e) {
		const name = e.target.getAttribute('name');
		const color = e.target.getAttribute('data-color');
		const timespan = e.target.getAttribute('data-timespan');
		let years = parseInt(timespan / 31536000000, 10);
		let months = parseInt((timespan % 31536000000) / 2628000000, 10);
		let conjunction = '';

		if (years > 0 && name === 'JavaScript') {
			conjunction = '&&';
		} else if (years > 0) {
			conjunction = '&';
		}

		if (years > 0 && years <= 1) {
			years = '1 Year';
		} else if (years > 0) {
			years = `${years} Years`;
		} else {
			years = '';
		}

		if (months > 0 && months <= 1) {
			months = '1 Month';
		} else if (months > 0) {
			months = `${months} Months`;
		} else {
			months = '';
		}

		const experience = `${years} ${conjunction} ${months}`;

		this.setState({ name, color, experience });
	}

	render() {
		////////////////////////////////////////////////////////
		////     //        //  ///  //  ///////       //     ///
		///  /////////  //////  /  ///  ///////  //////  ///////
		////    //////  ///////  /////  ///////     ////    ////
		///////  /////  ///////  /////  ///////  //////////  ///
		///     //////  ///////  /////       //       //     ///
		////////////////////////////////////////////////////////

		const component = css({
			position: 'absolute',
			top: '0',
			left: '0',
			height: '100%',
			width: '100%'
		});

		const container = css({
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '80%'
		});

		const line = css({
			position: 'absolute',
			content: '""',
			height: '8px',
			borderRadius: '4px'
		});

		const stats = css({
			position: 'absolute',
			top: '120px',
			left: '12%'
		});

		const techName = css({
			fontSize: '16px',
			letterSpacing: '1px',
			color: this.state.color
		});

		const exp = css({
			fontSize: '12px',
			letterSpacing: '1px',
			color: _grey
		});

		///////   ///////  ///   //  //////    ///////  ///////
		//    //  //       ////  //  //   //   //       //    //
		///////   /////    // // //  //    //  /////    ///////
		//  //    //       //  ////  //   //   //       //  //
		//   //   ///////  //   ///  //////    ///////  //   //

		const timeline = Date.now() - this.state.startDate;
		const { name, startDate, experience, stack } = this.state;

		return (
			<div className={component}>
				<div className={stats}>
					<h3 className={techName}>{name}</h3>
					<p className={exp}>{experience}</p>
				</div>
				<div className={container}>
					{stack.map((obj, i) => {
						const timeSpan = stack[i].endDate - stack[i].startDate;
						const lineWidth = 100 / (timeline / timeSpan);
						const lineLeft =
							100 / (timeline / (stack[i].startDate - startDate));

						const lineStyle = {
							width: `${lineWidth}%`,
							left: `${lineLeft}%`,
							backgroundColor: stack[i].backgroundColor,
							transform: `translateY(${stack[i].offset})`,
							cursor: 'pointer'
						};

						return (
							<span
								key={shortid.generate()}
								className={line}
								onClick={this.getStats}
								style={lineStyle}
								name={this.state.stack[i].name}
								data-timespan={timeSpan}
								data-color={this.state.stack[i].backgroundColor}
							/>
						);
					})}
				</div>
				<ResumeFooter />
			</div>
		);
	}
}

export default Timeline;
