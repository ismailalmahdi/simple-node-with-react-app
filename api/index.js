import express from 'express';
import data from '../src/testData'

const router = express.Router();

const contests = data.contests.reduce((obj,contest) =>{
    obj[contest.id] = contest;
    return obj;
},{})

router.get('/contests',   (req, res) =>{
    res.send({ 
        contests: contests
    });

});

router.get('/contests/:contestId',   (req, res) =>{
    let contest = contests[req.params.contestId];
    contest.description = 'Ipsum incididunt veniam ipsum sit. Consectetur aliqua ex anim id dolore qui est fugiat. Proident aliquip laboris consectetur culpa sunt aliqua eiusmod consequat. Nostrud sunt et nisi duis culpa cupidatat nisi do commodo culpa labore. Eiusmod quis esse culpa excepteur incididunt deserunt amet elit eiusmod id est tempor aliqua ipsum.';
    res.send({ contest });

});

export default router;