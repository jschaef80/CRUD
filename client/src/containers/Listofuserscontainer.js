import { connect } from 'react-redux'
import ListOfUsers from "../components/ListOfUsers"

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListOfUsers)