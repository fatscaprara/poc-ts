export function notFoundError() {
  return {
    type: "not_found",
  };
}

export function badRequestError() {
  return {
    type: "bad_request",
  };
}
