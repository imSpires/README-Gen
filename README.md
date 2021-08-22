
  # README GENERATOR

  ## Table of Contents
  * [Project Links] (#Project-Links)
  * [ Screenshots-Demo ](#Media)
  * [ Project Objective ](#Project-Objective)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Author Contact ](#Author-Contact)
  * [ License ](#License)
  #

  ## Project Links
  https://github.com/imspires/README Generator<br>

  ## Media
  class URL {
  constructor(input, base) {
    // toUSVString is not needed.
    input = `${input}`;
    let base_context;
    if (base !== undefined) {
      base_context = new URL(base)[context];
    }
    this[context] = new URLContext();
    parse(input, -1, base_context, undefined,
          FunctionPrototypeBind(onParseComplete, this), onParseError);
  }

  get [special]() {
    return (this[context].flags & URL_FLAGS_SPECIAL) !== 0;
  }

  get [cannotBeBase]() {
    return (this[context].flags & URL_FLAGS_CANNOT_BE_BASE) !== 0;
  }

  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  get [cannotHaveUsernamePasswordPort]() {
    const { host, scheme } = this[context];
    return ((host == null || host === '') ||
            this[cannotBeBase] ||
            scheme === 'file:');
  }

  [inspect.custom](depth, opts) {
    if (this == null ||
        ObjectGetPrototypeOf(this[context]) !== URLContext.prototype) {
      throw new ERR_INVALID_THIS('URL');
    }

    if (typeof depth === 'number' && depth < 0)
      return this;

    const constructor = getConstructorOf(this) || URL;
    const obj = ObjectCreate({ constructor });

    obj.href = this.href;
    obj.origin = this.origin;
    obj.protocol = this.protocol;
    obj.username = this.username;
    obj.password = this.password;
    obj.host = this.host;
    obj.hostname = this.hostname;
    obj.port = this.port;
    obj.pathname = this.pathname;
    obj.search = this.search;
    obj.searchParams = this.searchParams;
    obj.hash = this.hash;

    if (opts.showHidden) {
      obj.cannotBeBase = this[cannotBeBase];
      obj.special = this[special];
      obj[context] = this[context];
    }

    return `${constructor.name} ${inspect(obj, opts)}`;
  }
}

  ## Objective
  To dynamically generate a README

  ## Technologies
  ```
  JavaScript
  ```

  ## Installation
  Install

  ## Usage
  Node

  ## Author/Contact
  Contact the author with any questions!<br>
  Github link: [imspires](https://github.com/imspires)<br>
  Email: RD3@knights.ucf.edu

  ## License
  This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.<br />

  Copyright © 2021 [RYAN](https://github.com/imspires)

  <hr>
  <p align='center'><i>
  This README.md was created by RYAN
  </i></p>
