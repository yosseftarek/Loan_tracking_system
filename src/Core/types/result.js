export class Result {
  constructor(success, data = null, error = null) {
    this.success = success;
    this.data = data;
    this.error = error;
  }

  static ok(data) {
    return new Result(true, data, null);
  }

  static fail(error) {
    return new Result(false, null, error);
  }
}
