import RequestParameter from '../src';

describe('Request Parameter', () => {
  test('Parameter is empty', async () => {});

  test('Parameter value', async () => {
    const mock_request_parameter = {
      param1: 'value1',
      param2: 'value2',
      param3: 'value3'
    };

    const value_param1 = RequestParameter.value(mock_request_parameter, 'param1');
    expect(value_param1).toEqual(mock_request_parameter.param1);
  });
});
