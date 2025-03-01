import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions';
// import { removeCar } action here

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here

const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)