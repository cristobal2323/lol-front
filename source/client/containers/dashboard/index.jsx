import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as dashboardActions from "../../actions/dashboard/index";
import * as loginactions from "../../actions/login/index";

/* Components */
import Nav from "../nav/";
import Header from "../header/";
import Home from "../home/";
import ListUser from "../list_user/";
import AddUser from "../add_user/";
import UpdateUser from "../update_user/";

import ListDatosPersonales from "../list_datos_personales/";
import AddDatosPersonales from "../add_datos_personales/";
import UpdateDatosPersonales from "../update_datos_personales/";

import ListTrabajadorEmpresa from "../list_trabajador_empresa/";
import AddTrabajadorEmpresa from "../add_trabajador_empresa/";
import UpdateTrabajadorEmpresa from "../update_trabajador_empresa/";

import ListExamenMedico from "../list_examen_medico";
import AddExamenMedico from "../add_examen_medico/";
import UpdateExamenMedico from "../update_examen_medico/";

import ListExamenFisico from "../list_examen_fisico";
import AddExamenFisico from "../add_examen_fisico/";
import UpdateExamenFisico from "../update_examen_fisico/";

import ListOximetria from "../list_oximetria";
import AddOximetria from "../add_oximetria/";
import UpdateOximetria from "../update_oximetria/";

import ListPolisomnografia from "../list_polisomnografia";
import AddPolisomnografia from "../add_polisomnografia";
import UpdatePolisomnografia from "../update_polisomnografia";

import SurveysEpworth from "../surveys_epworth";

import Expired from "../expired/index";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    /* Verificamos el auth */
    let auth = localStoreFN().getItem("auth");
    const user = localStoreFN().getItem("user");
    auth = auth === "true";
    if (auth) {
      await this.props.actions.fetchDashboardApi({ user });
    } else {
      this.handleLogOut();
    }
  }

  /* Función de cerrar sesíon */
  handleLogOut = async () => {
    await this.props.loginActions.logOut();
    this.props.actions.resetDashboard();
    this.props.history.push("/");
  };

  componentWillUnmount() {
    this.props.actions.resetDashboard();
  }

  /* Render: contamos con el Header y Nav */
  render() {
    let container;
    if (this.props.status === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.status === 200) {
      if (this.props.data.ejecucion) {
        if (this.props.data.ejecucion.estado) {
          container = (
            <main>
              <Header
                loading={this.props.loading}
                data={this.props.data}
                handleLogOut={this.handleLogOut}
              />
              <Nav data={this.props.data} />
              <Route exact path={this.props.match.path} component={Home} />
              <Route
                path={`${this.props.match.path}/list_user`}
                component={ListUser}
              />
              <Route
                path={`${this.props.match.path}/add_user`}
                component={AddUser}
              />
              <Route
                path={`${this.props.match.path}/update_user/:id`}
                component={UpdateUser}
              />
              <Route
                path={`${this.props.match.path}/list_personal_data`}
                component={ListDatosPersonales}
              />
              <Route
                path={`${this.props.match.path}/add_personal_data`}
                component={AddDatosPersonales}
              />
              <Route
                path={`${this.props.match.path}/update_personal_data/:id`}
                component={UpdateDatosPersonales}
              />
              <Route
                path={`${this.props.match.path}/list_trabajador_empresa`}
                component={ListTrabajadorEmpresa}
              />
              <Route
                path={`${this.props.match.path}/add_trabajador_empresa`}
                component={AddTrabajadorEmpresa}
              />
              <Route
                path={`${this.props.match.path}/update_trabajador_empresa/:id`}
                component={UpdateTrabajadorEmpresa}
              />
              <Route
                path={`${this.props.match.path}/list_examen_medico`}
                component={ListExamenMedico}
              />
              <Route
                path={`${this.props.match.path}/add_examen_medico`}
                component={AddExamenMedico}
              />
              <Route
                path={`${this.props.match.path}/update_examen_medico/:id`}
                component={UpdateExamenMedico}
              />
              <Route
                path={`${this.props.match.path}/list_examen_fisico`}
                component={ListExamenFisico}
              />
              <Route
                path={`${this.props.match.path}/add_examen_fisico`}
                component={AddExamenFisico}
              />
              <Route
                path={`${this.props.match.path}/update_examen_fisico/:id`}
                component={UpdateExamenFisico}
              />
              <Route
                path={`${this.props.match.path}/list_oximetria`}
                component={ListOximetria}
              />
              <Route
                path={`${this.props.match.path}/add_oximetria`}
                component={AddOximetria}
              />
              <Route
                path={`${this.props.match.path}/update_oximetria/:id`}
                component={UpdateOximetria}
              />
              <Route
                path={`${this.props.match.path}/list_polisomnografia`}
                component={ListPolisomnografia}
              />
              <Route
                path={`${this.props.match.path}/add_polisomnografia`}
                component={AddPolisomnografia}
              />
              <Route
                path={`${this.props.match.path}/update_polisomnografia/:id`}
                component={UpdatePolisomnografia}
              />
              <Route
                path={`${this.props.match.path}/epworth`}
                component={SurveysEpworth}
              />
            </main>
          );
        } else {
          container = <main />;
        }
      } else {
        container = <main />;
      }
    } else {
      container = <main />;
    }
    return container;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.dashboard.data,
  loading: state.reducer.dashboard.loading,
  status: state.reducer.dashboard.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(dashboardActions, dispatch),
  loginActions: bindActionCreators(loginactions, dispatch)
});

Dashboard.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  loginActions: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
