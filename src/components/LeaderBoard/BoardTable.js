import React from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const BoardTable = (props) => {

  const countryWithFlags = (props) => {
    const country = props.dataItem.country
    return (
      <td>
        <img src={`https://www.countryflags.io/${country}/shiny/24.png`}/>
      </td>
    );
  }

  const dailyDiffWithBackGround = (props) => {
    const dailyDiff = props.dataItem.dailyDiff

    let $color = "#aeae11"

    if(dailyDiff > 0) {
      $color = "green"
    } else if(dailyDiff < 0) {
      $color = "red"
    }

    return (
      <td
        style={{
          color: $color
        }}
      >
        {dailyDiff}
      </td>
    );
  };



  const rowRender = (trElement, gridProps) => {
    const currentUser = (gridProps.dataItem.name == props.currentUser)
    const focus = {
      backgroundColor: "rgb(55, 180, 0,0.32)",
    };
    const trProps = {
      style: currentUser ? focus : {}
    };
    console.log(trElement.props.children)
    return React.cloneElement(
      trElement,
      { ...trProps },
      trElement.props.children
    );
  };



    return (
    <Grid
        style={{
          height: props.height,
        }}
        data={props.users}
        rowRender={rowRender}
      >
        <Column className="country-field" field="country"  title="Country" cell={countryWithFlags} />
        <Column className="username-field" field="name" title="Username" />
        <Column className="money-field" field="money" title="Money" />
        <Column className="rank-field" field="rank" title="Rank" />
        <Column className="daily-diff" field="dailyDiff"  title="Daily Diff" cell={dailyDiffWithBackGround} />
      </Grid>
    );
}

export default BoardTable