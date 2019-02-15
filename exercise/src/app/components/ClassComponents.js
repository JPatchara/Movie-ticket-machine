import React from 'react'
import 'semantic-ui-react'
import fireST from '../configs/firestore'
import List from './MoviesList'

class MoviesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fireST.firestore().collection('MoviesDetails');
        this.unsubscribe = null;
        this.state = {
            MoviesName: [],
            showModal: 0,
            list_count: 0
        }
    }
    onCollectionUpdate = (querySnapshot) => {
        const MoviesName = []
        var list_count = 1
        querySnapshot.forEach((doc) => {
            const Data = doc.data()
            MoviesName.push({
                id: list_count,
                name: Data.Name,
                price: Data.Price,
                tagline: Data.Tagline,
                image: Data.Image
            });
            list_count = list_count+1
        });
        this.setState({ MoviesName })
        this.setState({list_count})
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <List data={this.state.MoviesName} />
        );
    }
}
export { MoviesContainer }