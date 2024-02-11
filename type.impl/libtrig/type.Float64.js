(function() {var type_impls = {
"libtrig":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Cos-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#24-26\">source</a><a href=\"#impl-Cos-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libtrig/prelude/trait.Cos.html\" title=\"trait libtrig::prelude::Cos\">Cos</a> for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cos\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#25\">source</a><a href=\"#method.cos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Cos.html#tymethod.cos\" class=\"fn\">cos</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the cosine of a number (in radians). <a href=\"libtrig/prelude/trait.Cos.html#tymethod.cos\">Read more</a></div></details></div></details>","Cos","libtrig::types::RadianOrDegree64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Float-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#32-97\">source</a><a href=\"#impl-Float-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libtrig/prelude/trait.Float.html\" title=\"trait libtrig::prelude::Float\">Float</a> for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.floor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.floor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.floor\" class=\"fn\">floor</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the largest integer less than or equal to <code>self</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.floor\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ceil\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.ceil\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.ceil\" class=\"fn\">ceil</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the smallest integer greater than or equal to <code>self</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.ceil\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.round\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.round\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.round\" class=\"fn\">round</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the nearest integer to <code>self</code>. If a value is half-way between two\nintegers, round away from <code>0.0</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.round\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trunc\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.trunc\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.trunc\" class=\"fn\">trunc</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the integer part of <code>self</code>.\nThis means that non-integer numbers are always truncated towards zero. <a href=\"libtrig/prelude/trait.Float.html#tymethod.trunc\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.abs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.abs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.abs\" class=\"fn\">abs</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the absolute value of <code>self</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.abs\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.exp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp\" class=\"fn\">exp</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns <code>e^(self)</code>, (the exponential function). <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exp2\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.exp2\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp2\" class=\"fn\">exp2</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns <code>2^(self)</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp2\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ln\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.ln\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.ln\" class=\"fn\">ln</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the natural logarithm of the number. <a href=\"libtrig/prelude/trait.Float.html#tymethod.ln\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.log2\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.log2\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.log2\" class=\"fn\">log2</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the base 2 logarithm of the number. <a href=\"libtrig/prelude/trait.Float.html#tymethod.log2\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.log10\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.log10\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.log10\" class=\"fn\">log10</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the base 10 logarithm of the number. <a href=\"libtrig/prelude/trait.Float.html#tymethod.log10\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cbrt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.cbrt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.cbrt\" class=\"fn\">cbrt</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the cube root of a number. <a href=\"libtrig/prelude/trait.Float.html#tymethod.cbrt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tan\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.tan\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.tan\" class=\"fn\">tan</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the tangent of a number (in radians). <a href=\"libtrig/prelude/trait.Float.html#tymethod.tan\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.asin\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.asin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.asin\" class=\"fn\">asin</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the arcsine of a number. Return value is in radians in\nthe range [-pi/2, pi/2] or NaN if the number is outside the range\n[-1, 1]. <a href=\"libtrig/prelude/trait.Float.html#tymethod.asin\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.acos\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.acos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.acos\" class=\"fn\">acos</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the arccosine of a number. Return value is in radians in\nthe range [0, pi] or NaN if the number is outside the range\n[-1, 1]. <a href=\"libtrig/prelude/trait.Float.html#tymethod.acos\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.atan\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.atan\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.atan\" class=\"fn\">atan</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the arctangent of a number. Return value is in radians in the\nrange [-pi/2, pi/2]; <a href=\"libtrig/prelude/trait.Float.html#tymethod.atan\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exp_m1\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.exp_m1\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp_m1\" class=\"fn\">exp_m1</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns <code>e^(self) - 1</code> in a way that is accurate even if the\nnumber is close to zero. <a href=\"libtrig/prelude/trait.Float.html#tymethod.exp_m1\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ln_1p\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.ln_1p\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.ln_1p\" class=\"fn\">ln_1p</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns <code>ln(1+n)</code> (natural logarithm) more accurately than if\nthe operations were performed separately. <a href=\"libtrig/prelude/trait.Float.html#tymethod.ln_1p\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sinh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.sinh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.sinh\" class=\"fn\">sinh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Hyperbolic sine function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.sinh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cosh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.cosh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.cosh\" class=\"fn\">cosh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Hyperbolic cosine function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.cosh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tanh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.tanh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.tanh\" class=\"fn\">tanh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Hyperbolic tangent function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.tanh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.asinh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.asinh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.asinh\" class=\"fn\">asinh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Inverse hyperbolic sine function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.asinh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.acosh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.acosh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.acosh\" class=\"fn\">acosh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Inverse hyperbolic cosine function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.acosh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.atanh\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#33-35\">source</a><a href=\"#method.atanh\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.atanh\" class=\"fn\">atanh</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Inverse hyperbolic tangent function. <a href=\"libtrig/prelude/trait.Float.html#tymethod.atanh\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul_add\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#38-40\">source</a><a href=\"#method.mul_add\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.mul_add\" class=\"fn\">mul_add</a>(&amp;self, a: Self, b: Self) -&gt; Self</h4></section></summary><div class='docblock'>Fused multiply-add. Computes <code>(self * a) + b</code> with only one rounding\nerror, yielding a more accurate result than an unfused multiply-add. <a href=\"libtrig/prelude/trait.Float.html#tymethod.mul_add\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.div_euclid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#43-45\">source</a><a href=\"#method.div_euclid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.div_euclid\" class=\"fn\">div_euclid</a>(&amp;self, rhs: Self) -&gt; Self</h4></section></summary><div class='docblock'>Calculates Euclidean division, the matching method for <code>rem_euclid</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.div_euclid\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rem_euclid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#48-50\">source</a><a href=\"#method.rem_euclid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.rem_euclid\" class=\"fn\">rem_euclid</a>(&amp;self, rhs: Self) -&gt; Self</h4></section></summary><div class='docblock'>Calculates the least nonnegative remainder of <code>self (mod rhs)</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.rem_euclid\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.signum\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#53-61\">source</a><a href=\"#method.signum\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.signum\" class=\"fn\">signum</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a number that represents the sign of <code>self</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.signum\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.signof\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#64-66\">source</a><a href=\"#method.signof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.signof\" class=\"fn\">signof</a>(&amp;self, rhs: Self) -&gt; Self</h4></section></summary><div class='docblock'>Returns <code>self</code> with the sign of <code>rhs</code>.\nThis method computes <code>self.abs() * rhs.signum()</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.powi\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#69-71\">source</a><a href=\"#method.powi\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.powi\" class=\"fn\">powi</a>(&amp;self, n: <a class=\"type\" href=\"libtrig/type.Int.html\" title=\"type libtrig::Int\">Int</a>) -&gt; Self</h4></section></summary><div class='docblock'>Raises a number to an integer power. <a href=\"libtrig/prelude/trait.Float.html#tymethod.powi\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.powf\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#74-76\">source</a><a href=\"#method.powf\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.powf\" class=\"fn\">powf</a>(&amp;self, n: Self) -&gt; Self</h4></section></summary><div class='docblock'>Raises a number to a floating point power. <a href=\"libtrig/prelude/trait.Float.html#tymethod.powf\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.log\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#79-81\">source</a><a href=\"#method.log\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.log\" class=\"fn\">log</a>(&amp;self, base: Self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the logarithm of the number with respect to an arbitrary base. <a href=\"libtrig/prelude/trait.Float.html#tymethod.log\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hypot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#84-86\">source</a><a href=\"#method.hypot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.hypot\" class=\"fn\">hypot</a>(&amp;self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Compute the distance between the origin and a point (<code>x</code>, <code>y</code>) on the\nEuclidean plane. Equivalently, compute the length of the hypotenuse of a\nright-angle triangle with other sides having length <code>x.abs()</code> and\n<code>y.abs()</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.hypot\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.atan2\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#89-91\">source</a><a href=\"#method.atan2\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.atan2\" class=\"fn\">atan2</a>(&amp;self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the four quadrant arctangent of <code>self</code> (<code>y</code>) and <code>other</code> (<code>x</code>) in radians. <a href=\"libtrig/prelude/trait.Float.html#tymethod.atan2\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fract\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#94-96\">source</a><a href=\"#method.fract\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#tymethod.fract\" class=\"fn\">fract</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the fractional part of <code>self</code>. <a href=\"libtrig/prelude/trait.Float.html#tymethod.fract\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sin_cos\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/float.rs.html#532-534\">source</a><a href=\"#method.sin_cos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Float.html#method.sin_cos\" class=\"fn\">sin_cos</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(Output, Output)</a></h4></section></summary><div class='docblock'>Simultaneously computes the sine and cosine of the number, <code>x</code>. Returns\n<code>(sin(x), cos(x))</code>. <a href=\"libtrig/prelude/trait.Float.html#method.sin_cos\">Read more</a></div></details></div></details>","Float","libtrig::types::RadianOrDegree64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3Cu2%3E-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/morenums/u2/impls.rs.html#137-143\">source</a><a href=\"#impl-From%3Cu2%3E-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libtrig/struct.u2.html\" title=\"struct libtrig::u2\">u2</a>&gt; for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/morenums/u2/impls.rs.html#140-142\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(u: <a class=\"struct\" href=\"libtrig/struct.u2.html\" title=\"struct libtrig::u2\">u2</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<u2>","libtrig::types::RadianOrDegree64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3Cu3%3E-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/morenums/u3/impls.rs.html#145-151\">source</a><a href=\"#impl-From%3Cu3%3E-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libtrig/struct.u3.html\" title=\"struct libtrig::u3\">u3</a>&gt; for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/morenums/u3/impls.rs.html#148-150\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(u: <a class=\"struct\" href=\"libtrig/struct.u3.html\" title=\"struct libtrig::u3\">u3</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<u3>","libtrig::types::RadianOrDegree64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sin-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#21-23\">source</a><a href=\"#impl-Sin-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libtrig/prelude/trait.Sin.html\" title=\"trait libtrig::prelude::Sin\">Sin</a> for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sin\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#22\">source</a><a href=\"#method.sin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Sin.html#tymethod.sin\" class=\"fn\">sin</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Computes the sine of a number (in radians). <a href=\"libtrig/prelude/trait.Sin.html#tymethod.sin\">Read more</a></div></details></div></details>","Sin","libtrig::types::RadianOrDegree64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sqrt-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#27-29\">source</a><a href=\"#impl-Sqrt-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libtrig/prelude/trait.Sqrt.html\" title=\"trait libtrig::prelude::Sqrt\">Sqrt</a> for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sqrt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#28\">source</a><a href=\"#method.sqrt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libtrig/prelude/trait.Sqrt.html#tymethod.sqrt\" class=\"fn\">sqrt</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the square root of a number. <a href=\"libtrig/prelude/trait.Sqrt.html#tymethod.sqrt\">Read more</a></div></details></div></details>","Sqrt","libtrig::types::RadianOrDegree64"],["<section id=\"impl-Number-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/libtrig/traits/impls.rs.html#6\">source</a><a href=\"#impl-Number-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libtrig/prelude/trait.Number.html\" title=\"trait libtrig::prelude::Number\">Number</a> for <a class=\"type\" href=\"libtrig/type.Float64.html\" title=\"type libtrig::Float64\">Float64</a></h3></section>","Number","libtrig::types::RadianOrDegree64"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()