import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actionDispatchers from './actionDispatchers';
import Loader from 'Components/Loader';
import SelectDropdown from 'Components/SelectDropdown';
import ResultAccordion from 'Components/ResultAccordion';
import Aside from 'Components/Aside';
import KeyValue from 'Components/KeyValue';
import appStrings from 'Utilities/StringConst'
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


export class Okrs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: '',
            isModalOpen: false,
            selectedChildren: {},
            selectedParent: {}
        }
    }

    async componentDidMount() {
        await this.props.okrQuery();
        this.filtersSelected({
            text: this.props.okrStateObj.filters[0],
            index: 0
        })
    }

    componentWillUnmount() {
    }

    filtersSelected = (selectedObj) => {
        this.setState({
            selectedFilter: selectedObj.text
        })
    }

    selectedChildren = (data) => {
        this.setState({
            isModalOpen: true,
            selectedChildren: {...data.children},
            selectedParent: {...data.parent}
        })
    }

    modalClosed = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        let {filters, renderData, loading, apiError} = this.props.okrStateObj;
        let childrenKeys = Object.keys(this.state.selectedChildren);

        {/* loading spinner when api is called */}
        if (loading) {
            return <Loader loadingText={appStrings.fetchingResult}/>
        }

        if (!loading && apiError) {
            return <div className="error-message">{appStrings.apiError}</div>
        }
       
        return (
            <section className="page">


                {/* Dropdown filter */}
                <div className="filter-container">
                    <div className="filter">
                        <SelectDropdown optionsList={filters} onChangeMethod={this.filtersSelected}/>
                    </div>
                </div>
                
                {/* Filter results will be shown here */}
                <div className="results-container">
                    {
                        renderData && renderData.map((elm, index) => {
                            return (
                                this.state.selectedFilter === elm.category && (
                                    <ResultAccordion 
                                        key={`render-data-${index}`}
                                        renderData={elm} 
                                        clickedChildrenMethod={this.selectedChildren}/>
                                )
                            )
                        })
                    }
                </div>


                {/* Aside Modal to display children details */}
                <Aside isModalOpen={this.state.isModalOpen} modalClosedMethod={this.modalClosed}>
                    <h4>
                        {this.state.selectedParent.title}
                    </h4>
                    <div className="chirdren-details">
                        {
                            childrenKeys.map((elm, index) => {
                                return <KeyValue 
                                    key={'key-val-'+index} 
                                    keyToDisplay={elm} 
                                    value={this.state.selectedChildren[elm]}
                                    />
                                    
                            })
                        }
                    </div>
                </Aside>
            </section>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        okrStateObj: state.okrPageState
    }
}
  
const mapDispatchToProps = actionDispatchers;
  
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Okrs);