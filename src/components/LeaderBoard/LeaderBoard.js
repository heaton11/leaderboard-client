import React, { useState, useEffect } from 'react';

import BoardTable from "./BoardTable"
import Operations from "../Operations/Operations"

import classes from './leader-board.module.scss';

const loadingPanel = (
  <div className="k-loading-mask">
    <span className="k-loading-text">Loading</span>
    <div className="k-loading-image"></div>
    <div className="k-loading-color"></div>
  </div>
);

const LeaderBoard = () => {

  const [users, setUsers] = useState({
    currentUser: "",
    users: []
  })

  useEffect(() => {
    getRandomUser()
  }, [])

  const [onProgress, setProgress] = useState(false)

  const getRandomUser = () => {
    setProgress(true)
    fetch("/leaderboard")
      .then(response => response.json())
      .then(data => {
        setUsers({
          currentUser: data.currentUser,
          users: data.users
        })
      })
      .then(_ => setProgress(false))
  }

  const handleChange = (fetchURL = "") => {
    setProgress(true)
    if(fetchURL) {
      fetch(fetchURL)
        .then(_ => getRandomUser())
    } else {
      getRandomUser()
    }
  }


  return (
    <div>
      <Operations 
        onChange={handleChange}
      />
      {onProgress ? loadingPanel : ""}
      <BoardTable 
        currentUser={users.currentUser}
        users={users.users}
        height={"400px"} />
    </div>
  );
}

export default LeaderBoard