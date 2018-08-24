/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { Component } from '@wordpress/element';
import { withDraggable } from '@wordpress/components';

class BlockDraggable extends Component {
	render() {
		const { clientId, elementId, index, initDragging, isDragging, layout, rootClientId } = this.props;
		const className = classnames( 'components-draggable', 'editor-block-list__block-draggable', {
			'is-visible': isDragging,
		} );

		const transferData = {
			type: 'block',
			fromIndex: index,
			rootClientId,
			clientId,
			layout,
		};

		return (
			<div
				className={ className }
				onDragStart={ initDragging( elementId, transferData ) }
				draggable
			>
				<div className="editor-block-list__block-draggable-inner"></div>
			</div>
		);
	}
}
export default withDraggable( BlockDraggable );
