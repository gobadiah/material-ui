import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;
