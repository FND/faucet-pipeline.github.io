> given the choice between making something _my_ problem, and making something
> _the user's_ problem, I'll choose to make it my problem every time

— [Jeremy Keith](https://adactio.com/journal/7706)

faucet tries hard to be
[replaceable](https://martinfowler.com/bliki/SacrificialArchitecture.html) and
to stay out of your way: We believe that source code should not rely on any
particular build tool, but rather be standards-compliant and thus portable
across build systems.

As such, it is designed around intentional constraints and might not be for
everyone. faucet aims for simplicity based on certain assumptions and beliefs
(e.g. [deletability](https://kellysutton.com/2017/05/29/deletability.html)).

----

getting people to take adavantage of Rollup as a/the primary motivation
originally prompted by
[The cost of small modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/),
in particular the lack of function bloat:

> every module in Webpack and Browserify gets its own function scope, and is
> loaded at runtime when require()d from the main script. Rollup and Closure
> Compiler, on the other hand, just hoist everything into a single function
> scope (creating variables and namespacing them as necessary).

thus: we care not just about the input, but also about the output

quote cdent on constraints

simple, painless management of web assets/resources

reduces low-level config hassle as well as dependency-management chores

we don't expect to change the underlying tooling frequently, but we'll be able
to if something better comes along - without burdening users with the details
e.g. dreading upgrade from Babel v6 to v7?

relying on amazing work by people like … - faucet merely provides a bit of glue
code on top
