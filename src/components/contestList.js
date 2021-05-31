import PropTypes from 'prop-types';
import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => (
    <div>
        {contests.map(contest => 
        <ContestPreview key={contest.id}  {...contest}/>
        )}
    </div>
);

ContestList.prototypes = {
    contests:  PropTypes.array
}

export default ContestList; 