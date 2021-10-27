import React, { useState, useEffect } from 'react';
import { Form, Alert } from 'react-bootstrap';

import * as configcat from 'configcat-js';

const ConfigCatSample = () => {
  const [selectedFlag, setSelectedFlag] = useState(' ');
  const [featureFlags, setFeatureFlags] = useState([]);
  const [selectedFlagStatus, setSelectedFlagStatus] = useState();

  useEffect(() => {
    configCatClient.getAllKeys((value) => {
      setFeatureFlags(value);
    });
  }, []);

  useEffect(() => {
    configCatClient.getValue(selectedFlag, false, (value) => {
      setSelectedFlagStatus(value);
    });
  }, [selectedFlag]);

  let logger = configcat.createConsoleLogger(3);

  const { REACT_APP_CONFIG_CAT_KEY } = process.env;

  let configCatClient = configcat.createClient(REACT_APP_CONFIG_CAT_KEY, {
    logger,
  });

  return (
    <div className='searchbar__form'>
      <div>
        <h4 className='heading'>Choose a Feature Flag Key</h4>
        <p className='description'>
          Note: these can be found in your Config Cat dashboard
        </p>
        <Form.Control
          className='searchbar__input'
          as='select'
          value={selectedFlag}
          onChange={(e) => setSelectedFlag(e.target.value)}
        >
          <option>----------</option>
          {featureFlags.map((flag) => (
            <option key={flag} value={flag}>
              98m
              {flag}
            </option>
          ))}
        </Form.Control>
      </div>
      <h4 className='heading'>Your Feature {selectedFlag} is:</h4>

      {selectedFlagStatus ? (
        <h2>
          <Alert variant='success'>ON</Alert>
        </h2>
      ) : (
        <h2>
          <Alert variant='danger'>OFF</Alert>
        </h2>
      )}
    </div>
  );
};

export default ConfigCatSample;
