import React from 'react';
import { css } from 'emotion';
import shortid from 'shortid';

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

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Timeline = props => {
	const stack = [
		'_HTML',
		'_CSS',
		'_JavaScript',
		'_PHP',
		'_Python',
		'_Sass',
		'_React',
		'_Redux',
		'_Radium',
		'_Emotion',
		'_Nodejs',
		'_MongoDB'
	];

	return (
		<div className={component}>
			<div className={container}>
				{stack.map((obj, i) => {
					const evilClass = eval(stack[i]);

					return (
						<span
							key={shortid.generate()}
							className={css`
								${line} ${evilClass};
							`}
						/>
					);
				})}
			</div>
		</div>
	);
};

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

const _HTML = css({
	width: '100%',
	backgroundColor: _html
});

const _CSS = css({
	width: '97%',
	right: '0',
	backgroundColor: _css,
	transform: 'translateY(16px)'
});

const _JavaScript = css({
	width: '90%',
	right: '0',
	backgroundColor: _javaScript,
	transform: 'translateY(-16px)'
});

const _PHP = css({
	width: '19%',
	right: '43%',
	backgroundColor: _php,
	transform: 'translateY(-32px)'
});

const _Python = css({
	width: '6%',
	left: '84%',
	backgroundColor: _python,
	transform: 'translateY(64px)'
});

const _Sass = css({
	width: '16%',
	left: '56%',
	backgroundColor: _sass,
	transform: 'translateY(32px)'
});

const _React = css({
	width: '36%',
	right: '0',
	backgroundColor: _react,
	transform: 'translateY(-32px)'
});

const _Redux = css({
	width: '28%',
	right: '0',
	backgroundColor: _redux,
	transform: 'translateY(-64px)'
});

const _Radium = css({
	width: '18%',
	left: '73%',
	backgroundColor: _grey,
	transform: 'translateY(32px)'
});

const _Emotion = css({
	width: '8%',
	right: '0',
	backgroundColor: _emotion,
	transform: 'translateY(32px)'
});

const _Nodejs = css({
	width: '36%',
	right: '0',
	backgroundColor: _nodejs,
	transform: 'translateY(-48px)'
});

const _MongoDB = css({
	width: '36%',
	right: '0',
	backgroundColor: _mongoDB,
	transform: 'translateY(48px)'
});

export default Timeline;
