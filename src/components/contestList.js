import PropTypes from 'prop-types';
import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests , onContestClick}) => (
    <div>
        {Object.keys(contests).map(contestId => 
        <ContestPreview 
            key={contestId}  
            onClick={onContestClick}    
            {...contests[contestId]}/>
        )}
    </div>
);

ContestList.prototypes = {
    contests:  PropTypes.object,
    onContestClick: PropTypes.func.isRequired
}

export default ContestList; 