import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import "../Cards.css";

const Cards = ({data, index, onClickTableRow}) => {

    const clickBtn = (event) => {
        onClickTableRow(parseInt(event.target.id));
    }

	const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=>{}}>
                {<button className="cardDeleteButton" onClick={clickBtn} id={data.id}>DELETE</button>}
            </SwipeAction>
        </TrailingActions>
    );

    return (
		<SwipeableList type={Type.IOS} fullSwipe={false}>
            <SwipeableListItem trailingActions={trailingActions()}>
				<div className="card" onClick={clickBtn} id={index}>
					<div className="card__imageBox">
						<img className="card_imageBox_image" src={data.download_url} alt={data.author} draggable={false} />
					</div>
					<div className="card__info">
						<p className="card__info__author">
							<a href={data.download_url} target="_blank">{data.author}</a>
						</p> 
						<p className="card__info__id">
							<a href={data.download_url} target="_blank">
								#{data.id}
							</a>
						</p> 
					</div>
				</div>
			</SwipeableListItem>
		</SwipeableList>
    )
}


export default Cards;