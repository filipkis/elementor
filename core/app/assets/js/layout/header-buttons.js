import useAction from 'elementor-app/hooks/use-action';

import Button from './header-button';

export default function HeaderButtons( props ) {
	const action = useAction();

	let tools = '';

	if ( props.buttons.length ) {
		const buttons = props.buttons.map( ( button ) => {
			return <Button key={ button.id } {...button } />;
		} );

		tools = (
			<>
				{ buttons }
			</>
		);
	}

	return (
		<div className="eps-app__header-buttons">
			<Button
				text={ __( 'Close', 'elementor' ) }
				icon="eicon-close"
				className="eps-app__close-button"
				onClick={ action.backToDashboard }
			/>
			{ tools }
		</div>
	);
}

HeaderButtons.propTypes = {
	buttons: PropTypes.arrayOf( PropTypes.object ),
};

HeaderButtons.defaultProps = {
	buttons: [],
};
