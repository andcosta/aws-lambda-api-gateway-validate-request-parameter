exports.isEmpty = (event, attribute) => {
  let isEmpty = true;
  if (!event && !attribute) return isEmpty;

  if (event.pathParameters !== null && event.pathParameters !== undefined) {
    if (event.pathParameters[attribute] !== undefined && event.pathParameterss[attribute] !== null && event.pathParameterss[attribute] !== '') {
      isEmpty = false;
    }
  }

  if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
    if (
      event.queryStringParameters[attribute] !== undefined &&
      event.queryStringParameters[attribute] !== null &&
      event.queryStringParameters[attribute] !== ''
    ) {
      isEmpty = false;
    }
  }

  if (event.headers !== null && event.headers !== undefined) {
    if (event.headers[attribute] !== undefined && event.headers[attribute] !== null && event.headers[attribute] !== '') {
      isEmpty = false;
    }
  }

  if (event.body !== null && event.body !== undefined) {
    let body = JSON.parse(event.body);
    if (body[attribute]) {
      isEmpty = false;
    }
  }

  return isEmpty;
};

exports.value = (event, attribute) => {
  let value = '';

  if (event.pathParameters !== null && event.pathParameters !== undefined) {
    if (event.pathParameters[attribute] !== undefined && event.pathParameterss[attribute] !== null && event.pathParameterss[attribute] !== '') {
      value = event.pathParameterss[attribute];
    }
  }

  if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
    if (
      event.queryStringParameters[attribute] !== undefined &&
      event.queryStringParameters[attribute] !== null &&
      event.queryStringParameters[attribute] !== ''
    ) {
      value = event.queryStringParameters[attribute];
    }
  }

  if (event.headers !== null && event.headers !== undefined) {
    if (event.headers[attribute] !== undefined && event.headers[attribute] !== null && event.headers[attribute] !== '') {
      value = event.headers[attribute];
    }
  }

  if (event.body !== null && event.body !== undefined) {
    let body = JSON.parse(event.body);
    if (body[attribute]) {
      value = body[attribute];
    }
  }

  return value;
};
