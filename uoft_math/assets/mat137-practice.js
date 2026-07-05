"use strict";

// Original assessment-style questions. These are not copied from, or presented
// as, past U of T assessments.
const MAT137_ASSESSMENT_BANK = {
  "01": [
    ["Core", "Negate the statement: for every real $x$, there is a natural number $n$ such that $n>x^2$.", "There exists a real $x$ such that for every natural $n$, $n\\le x^2$. Keep the quantifier order and negate the final inequality."],
    ["Core", "Prove directly that the sum of two odd integers is even.", "Write the integers as $2a+1$ and $2b+1$. Their sum is $2(a+b+1)$, which is even by definition."],
    ["Proof", "Prove by contrapositive: if $n^2$ is divisible by $3$, then $n$ is divisible by $3$.", "If $n$ is not divisible by $3$, then $n\\equiv1$ or $2\\pmod 3$. In either case $n^2\\equiv1\\pmod 3$, so $n^2$ is not divisible by $3$."],
    ["Proof", "Prove by induction that $1+3+5+\\cdots+(2n-1)=n^2$ for every $n\\in\\mathbb N$.", "Check $n=1$. Assuming the sum is $k^2$, adding $2k+1$ gives $k^2+2k+1=(k+1)^2$."],
    ["Counterexample", "Decide whether $A\\subseteq B\\cup C$ implies $A\\subseteq B$ or $A\\subseteq C$. Prove or give a counterexample.", "False. Take $A=\\{1,2\\}$, $B=\\{1\\}$, and $C=\\{2\\}$. Then $A\\subseteq B\\cup C$, but neither claimed inclusion holds."],
    ["Challenge", "Prove that $\\sqrt3$ is irrational.", "Assume $\\sqrt3=p/q$ in lowest terms. Then $p^2=3q^2$, so $3$ divides $p$; write $p=3r$. Substitution gives $3$ divides $q$, contradicting lowest terms."],
    ["Core", "Write the contrapositive and the converse of: if $n$ is prime and $n>2$, then $n$ is odd. Which is equivalent to the original?", "Contrapositive: if $n$ is even, then $n$ is not prime or $n\\le2$ (equivalent). Converse: if $n$ is odd, then $n$ is prime and $n>2$ (not equivalent; $n=9$ fails it)."],
    ["Core", "Negate: there exists $x\\in\\mathbb{R}$ such that for all $y\\in\\mathbb{R}$, $xy=y$. Is the original true?", "Negation: for all $x\\in\\mathbb{R}$ there is $y$ with $xy\\ne y$. The original is true (take $x=1$), so its negation is false."],
    ["Proof", "Prove that $n^2+n$ is even for every integer $n$.", "$n^2+n=n(n+1)$ is a product of two consecutive integers, one of which is even, so the product is even."],
    ["Proof", "Prove by induction that $\\sum_{k=1}^n k^3=\\left(\\tfrac{n(n+1)}{2}\\right)^2$.", "Base $n=1$ gives $1$. If it holds for $k$, then adding $(k+1)^3$ to $\\left(\\tfrac{k(k+1)}2\\right)^2$ gives $\\left(\\tfrac{(k+1)(k+2)}2\\right)^2$ after factoring."],
    ["Proof", "Prove that there are infinitely many primes.", "If $p_1,\\dots,p_k$ were all primes, then $N=p_1\\cdots p_k+1$ leaves remainder $1$ when divided by each $p_i$, so any prime factor of $N$ is new — a contradiction."],
    ["Counterexample", "True or false: for all real $a,b$, if $a^2=b^2$ then $a=b$.", "False. Take $a=1$, $b=-1$: then $a^2=b^2=1$ but $a\\ne b$."],
    ["Proof", "Prove the distributive law $A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$.", "$x\\in A\\cap(B\\cup C)\\Longleftrightarrow x\\in A$ and ($x\\in B$ or $x\\in C$) $\\Longleftrightarrow$ ($x\\in A\\cap B$) or ($x\\in A\\cap C$)."],
    ["Concept", "Explain why $\\forall x\\,\\exists y\\,(y>x)$ is true over $\\mathbb{R}$ but $\\exists y\\,\\forall x\\,(y>x)$ is false.", "For each $x$ pick $y=x+1$, so the first holds. The second claims one $y$ exceeds every $x$, which is impossible since $x=y$ already fails $y>x$."]
  ],
  "02": [
    ["Core", "Using the definition of limit, prove $\\lim_{x\\to2}(3x-1)=5$.", "Given $\\varepsilon>0$, choose $\\delta=\\varepsilon/3$. Then $0<|x-2|<\\delta$ implies $|(3x-1)-5|=3|x-2|<\\varepsilon$."],
    ["Proof", "Prove from the definition that $\\lim_{x\\to1}x^2=1$.", "Restrict $\\delta\\le1$, so $|x+1|<3$. Choose $\\delta=\\min\\{1,\\varepsilon/3\\}$ and use $|x^2-1|=|x-1||x+1|$."],
    ["Concept", "Give a function with $\\lim_{x\\to0}f(x)=2$ but $f(0)=100$. Explain why this does not contradict the definition.", "For example, let $f(x)=2$ for $x\\ne0$ and $f(0)=100$. A limit only restricts punctured neighborhoods, so the value at the point is irrelevant."],
    ["Counterexample", "Give functions $f$ and $g$ for which neither $\\lim_{x\\to0}f(x)$ nor $\\lim_{x\\to0}g(x)$ exists, but $\\lim_{x\\to0}(f(x)+g(x))$ exists.", "Take $f(x)=1$ for $x>0$ and $0$ for $x<0$, and $g=-f$. Neither has a two-sided limit, but $f+g=0$ away from zero."],
    ["Proof", "Prove that $f(x)=|x|$ is continuous at every real $a$.", "Use the reverse triangle inequality: $||x|-|a||\\le|x-a|$. Given $\\varepsilon>0$, choose $\\delta=\\varepsilon$."],
    ["Challenge", "Show that $x^3+x-1=0$ has a solution in $(0,1)$, and explain why the Intermediate Value Theorem alone does not prove uniqueness.", "The polynomial is continuous, with values $-1$ at $0$ and $1$ at $1$, so IVT gives existence. IVT says nothing about how many roots occur."],
    ["Core", "Prove from the definition that $\\lim_{x\\to3}(4x+1)=13$.", "Given $\\varepsilon>0$, take $\\delta=\\varepsilon/4$. If $0<|x-3|<\\delta$ then $|(4x+1)-13|=4|x-3|<\\varepsilon$."],
    ["Proof", "Prove from the definition that $\\lim_{x\\to2}x^2=4$.", "Restrict $\\delta\\le1$, so $|x+2|<5$. Take $\\delta=\\min\\{1,\\varepsilon/5\\}$; then $|x^2-4|=|x-2||x+2|<5\\cdot\\tfrac{\\varepsilon}{5}=\\varepsilon$."],
    ["Core", "Compute $\\lim_{x\\to0}\\dfrac{\\sin 5x}{\\sin 3x}$.", "Write it as $\\dfrac{\\sin5x}{5x}\\cdot\\dfrac{3x}{\\sin3x}\\cdot\\dfrac53$. Each fraction tends to $1$, so the limit is $\\tfrac53$."],
    ["Core", "Compute $\\lim_{x\\to\\infty}\\dfrac{3x^2-x}{2x^2+5}$.", "Divide top and bottom by $x^2$: the limit is $\\tfrac32$."],
    ["Proof", "Use the squeeze theorem to prove $\\lim_{x\\to0}x^2\\cos(1/x)=0$.", "For $x\\ne0$, $-x^2\\le x^2\\cos(1/x)\\le x^2$. Both bounds tend to $0$, so the squeeze theorem gives $0$."],
    ["Concept", "For which $c$ is $f$ continuous at $1$, where $f(x)=cx+1$ for $x\\le1$ and $f(x)=x^2$ for $x>1$?", "Left value $c+1$ must equal the right limit $1$, so $c=0$."],
    ["Application", "Prove that $\\cos x=x$ has a solution in $(0,1)$.", "Let $g(x)=\\cos x-x$, continuous, with $g(0)=1>0$ and $g(1)=\\cos1-1<0$. By the IVT there is a root in $(0,1)$."],
    ["Challenge", "If $f$ is continuous on $[0,1]$ and $f(0)=f(1)$, prove there is $c\\in[0,\\tfrac12]$ with $f(c)=f(c+\\tfrac12)$.", "Let $g(x)=f(x+\\tfrac12)-f(x)$ on $[0,\\tfrac12]$. Then $g(0)+g(\\tfrac12)=f(1)-f(0)=0$, so $g$ has opposite-signed (or zero) endpoints; the IVT gives a zero."]
  ],
  "03": [
    ["Core", "Use the definition of derivative to find the derivative of $f(x)=x^2$ at an arbitrary point $a$.", "The quotient is $((a+h)^2-a^2)/h=2a+h$, which tends to $2a$ as $h\\to0$."],
    ["Core", "Differentiate $f(x)=\\sqrt{1+x^2}$ and state where the formula is valid.", "By the chain rule, $f'(x)=x/\\sqrt{1+x^2}$. It is valid for every real $x$ because the denominator is always positive."],
    ["Proof", "Prove that if $f$ is differentiable at $a$, then $f$ is continuous at $a$.", "Write $f(x)-f(a)=((f(x)-f(a))/(x-a))(x-a)$. The first factor tends to $f'(a)$ and the second to $0$."],
    ["Concept", "Find a function continuous at $0$ but not differentiable there, and justify both claims.", "Use $f(x)=|x|$. It is continuous by the reverse triangle inequality, but the difference quotient tends to $-1$ from the left and $1$ from the right."],
    ["Application", "Find the tangent line to $x^2+xy+y^2=7$ at $(1,2)$.", "Implicit differentiation gives $2x+y+xy'+2yy'=0$, so $y'=-4/5$ at $(1,2)$. The line is $y-2=-(4/5)(x-1)$."],
    ["Challenge", "Suppose $f(0)=0$ and $|f(x)|\\le x^2$ for all $x$. Prove that $f'(0)$ exists and find it.", "For $x\\ne0$, $|f(x)/x|\\le|x|$. By squeeze, the difference quotient tends to $0$, so $f'(0)=0$."],
    ["Core", "Use the definition of derivative to differentiate $f(x)=1/x$ at $a\\ne0$.", "$\\dfrac{1}{h}\\!\\left(\\dfrac1{a+h}-\\dfrac1a\\right)=\\dfrac{-1}{a(a+h)}\\to-\\dfrac1{a^2}$, so $f'(a)=-1/a^2$."],
    ["Core", "Differentiate $f(x)=\\dfrac{x}{x^2+1}$.", "Quotient rule: $f'(x)=\\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}$."],
    ["Core", "Differentiate $f(x)=\\sin(x^2)\\cos x$.", "Product and chain rules: $f'(x)=2x\\cos(x^2)\\cos x-\\sin(x^2)\\sin x$."],
    ["Proof", "Prove the product rule $(fg)'=f'g+fg'$ from the definition.", "Add and subtract $f(x+h)g(x)$ in the difference quotient to get $\\tfrac{f(x+h)-f(x)}{h}g(x)+f(x+h)\\tfrac{g(x+h)-g(x)}{h}$; let $h\\to0$ using continuity of $f$."],
    ["Concept", "Is $f(x)=x|x|$ differentiable at $0$? Justify.", "Yes. $\\tfrac{f(h)-f(0)}{h}=\\tfrac{h|h|}{h}=|h|\\to0$, so $f'(0)=0$ (and in fact $f'(x)=2|x|$)."],
    ["Application", "Find the tangent line to $y=e^x$ at $x=0$.", "$f(0)=1$ and $f'(0)=e^0=1$, so the tangent is $y=1+x$."],
    ["Application", "Find $y'$ by implicit differentiation if $\\sin(xy)=x$.", "Differentiate: $\\cos(xy)\\,(y+xy')=1$, so $y'=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}$ where $x\\cos(xy)\\ne0$."],
    ["Challenge", "If $g(x)=f(x^2)$ and $f'(3)=5$, find $g'(\\sqrt3)$.", "By the chain rule $g'(x)=2x\\,f'(x^2)$. At $x=\\sqrt3$ this is $2\\sqrt3\\,f'(3)=10\\sqrt3$."]
  ],
  "04": [
    ["Core", "Using logarithmic differentiation, find the derivative of $f(x)=x^x$ for $x>0$.", "Take logs: $\\ln f=x\\ln x$. Differentiate to get $f'/f=\\ln x+1$, hence $f'=x^x(\\ln x+1)$."],
    ["Core", "Differentiate $\\arctan(2x)$ and justify the chain-rule factor.", "The derivative is $2/(1+4x^2)$. The outer derivative is $1/(1+u^2)$ and $u'=2$."],
    ["Proof", "Assuming $\\ln x=\\int_1^x1/t\\,dt$, prove $\\ln(ab)=\\ln a+\\ln b$ for positive $a,b$.", "Compare $g(x)=\\ln(ax)-\\ln x$. Its derivative is $1/x-1/x=0$, so it is constant; evaluate at $x=1$."],
    ["Concept", "Explain why $a^x=e^{x\\ln a}$ requires $a>0$ when working with real-valued functions.", "The real logarithm is defined only for positive inputs. Negative bases do not define a real-valued exponential for every real exponent."],
    ["Application", "Find and classify all absolute extrema of $f(x)=x^2e^{-x}$ on $[0,\\infty)$.", "The endpoint $0$ and the interior critical point $2$ are the candidates. Since $f'=xe^{-x}(2-x)$, the function increases on $(0,2)$ and decreases after $2$. Thus $f(0)=0$ is the absolute minimum and $f(2)=4e^{-2}$ is the absolute maximum."],
    ["Challenge", "Prove that $\\lim_{x\\to0}(e^x-1)/x=1$ using the derivative of the exponential function.", "The expression is the difference quotient for $e^x$ at $0$. Since $(e^x)'|_{x=0}=e^0=1$, the limit is $1$."],
    ["Core", "Differentiate $f(x)=\\ln(\\cos x)$ and state its domain.", "$f'(x)=\\dfrac{-\\sin x}{\\cos x}=-\\tan x$, valid where $\\cos x>0$."],
    ["Core", "Differentiate $f(x)=e^{x}\\sin x$.", "Product rule: $f'(x)=e^x\\sin x+e^x\\cos x=e^x(\\sin x+\\cos x)$."],
    ["Core", "Differentiate $f(x)=\\arcsin(x^2)$.", "Chain rule: $f'(x)=\\dfrac{2x}{\\sqrt{1-x^4}}$ for $|x|<1$."],
    ["Proof", "Starting from $e^{\\ln x}=x$, prove that $(\\ln x)'=1/x$.", "Differentiate both sides: $e^{\\ln x}(\\ln x)'=1$, and $e^{\\ln x}=x$, so $(\\ln x)'=1/x$."],
    ["Core", "Use logarithmic differentiation on $y=\\dfrac{(x^2+1)^3}{\\sqrt{x+4}}$.", "$\\ln y=3\\ln(x^2+1)-\\tfrac12\\ln(x+4)$, so $\\dfrac{y'}{y}=\\dfrac{6x}{x^2+1}-\\dfrac{1}{2(x+4)}$; multiply by $y$."],
    ["Application", "Find the maximum of $f(x)=\\ln x-x$ on $(0,\\infty)$.", "$f'(x)=\\tfrac1x-1=0$ gives $x=1$; $f'>0$ before and $f'<0$ after, so the maximum is $f(1)=-1$."],
    ["Concept", "Differentiate $f(x)=\\log_{10}x$ and explain the constant factor.", "$\\log_{10}x=\\dfrac{\\ln x}{\\ln 10}$, so $f'(x)=\\dfrac{1}{x\\ln 10}$; the $\\ln 10$ comes from the change of base."],
    ["Challenge", "Prove that $e^x>1+x+\\tfrac{x^2}{2}$ for all $x>0$.", "Let $g(x)=e^x-1-x-\\tfrac{x^2}2$. Then $g(0)=0$, $g'(x)=e^x-1-x$, and $g''(x)=e^x-1>0$ for $x>0$, so $g'$ increases from $g'(0)=0$, making $g$ increase from $0$."]
  ],
  "05": [
    ["Core", "Verify that Rolle's theorem applies to $f(x)=x^2-4x+3$ on $[1,3]$ and find every guaranteed point.", "The polynomial is continuous and differentiable, and $f(1)=f(3)=0$. Since $f'(x)=2x-4$, the point is $c=2$."],
    ["Core", "Use the Mean Value Theorem to prove $|\\sin b-\\sin a|\\le|b-a|$.", "MVT gives $\\sin b-\\sin a=\\cos(c)(b-a)$ for some $c$ between $a$ and $b$. Take absolute values and use $|\\cos c|\\le1$."],
    ["Proof", "Suppose $f'(x)=0$ for every $x$ in an interval. Prove that $f$ is constant there.", "For any two points $a<b$, MVT gives $f(b)-f(a)=f'(c)(b-a)=0$. Thus all values agree."],
    ["Proof", "Use the Mean Value Theorem to prove $\\ln(1+x)<x$ for every $x>0$.", "Apply MVT to $\\ln t$ on $[1,1+x]$. Then $\\ln(1+x)=x/c$ for some $c>1$, so it is less than $x$."],
    ["Counterexample", "Show that the conclusion of the Mean Value Theorem can fail if continuity at an endpoint is removed.", "On $[0,1]$, let $f(0)=1$ and $f(x)=0$ for $x>0$. It is differentiable on $(0,1)$ with derivative $0$, but the secant slope is $-1$."],
    ["Challenge", "Suppose $f$ is differentiable and $1\\le f'(x)\\le3$ for every $x$. Prove $|f(x)-f(y)|\\le3|x-y|$ and $|f(x)-f(y)|\\ge|x-y|$.", "For $x\\ne y$, MVT gives $(f(x)-f(y))/(x-y)=f'(c)$. Apply the derivative bounds and absolute values."],
    ["Core", "Verify the Mean Value Theorem for $f(x)=x^2$ on $[1,3]$ and find $c$.", "The secant slope is $(9-1)/(3-1)=4$. Setting $f'(c)=2c=4$ gives $c=2$, which lies in $(1,3)$."],
    ["Proof", "Prove that if $f'(x)>0$ on an interval, then $f$ is strictly increasing there.", "For $x_1<x_2$, MVT gives $f(x_2)-f(x_1)=f'(c)(x_2-x_1)>0$, so $f(x_1)<f(x_2)$."],
    ["Proof", "Prove that $\\tan x>x$ for $x\\in(0,\\tfrac{\\pi}{2})$.", "Let $g(x)=\\tan x-x$. Then $g(0)=0$ and $g'(x)=\\sec^2x-1=\\tan^2x>0$ on $(0,\\tfrac{\\pi}2)$, so $g$ increases from $0$."],
    ["Application", "Show that $x^3+3x+1=0$ has exactly one real root.", "$f'(x)=3x^2+3>0$, so $f$ is strictly increasing (at most one root). Since $f(-1)=-3<0<1=f(0)$, the IVT gives exactly one."],
    ["Core", "If $f(1)=3$ and $f'(x)\\le2$ for all $x$, find the best upper bound for $f(4)$.", "MVT gives $f(4)-f(1)=f'(c)(3)\\le6$, so $f(4)\\le9$."],
    ["Proof", "Prove that $\\sqrt{1+x}<1+\\tfrac{x}{2}$ for all $x>0$.", "Let $g(x)=1+\\tfrac x2-\\sqrt{1+x}$. Then $g(0)=0$ and $g'(x)=\\tfrac12-\\tfrac{1}{2\\sqrt{1+x}}>0$ for $x>0$, so $g$ increases from $0$."],
    ["Counterexample", "Show that the conclusion of the MVT can fail if differentiability on the open interval is dropped.", "On $[-1,1]$, let $f(x)=|x|$. It is continuous and its secant slope is $0$, but $f'=-1$ on $(-1,0)$, $f'=1$ on $(0,1)$, and $f'$ does not exist at $0$. Thus no $c$ has $f'(c)=0$."],
    ["Challenge", "Prove that if $f$ is differentiable on an open interval $I$ and $f'(x)\\ne0$ for all $x\\in I$, then $f$ is one-to-one on $I$.", "If $f(x_1)=f(x_2)$ with $x_1<x_2$, Rolle's theorem gives $c$ with $f'(c)=0$ — a contradiction."]
  ],
  "06": [
    ["Core", "Find the absolute maximum and minimum of $f(x)=x^3-3x$ on $[-2,2]$.", "Check endpoints and critical points $x=\\pm1$. The values are $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, and $f(2)=2$."],
    ["Core", "Evaluate $\\lim_{x\\to0}(e^x-1-x)/x^2$ using L'Hôpital's rule.", "Differentiate numerator and denominator twice: the limit becomes $\\lim e^x/2=1/2$."],
    ["Application", "A rectangle has perimeter $40$. Find the dimensions giving maximum area and justify that the maximum is global.", "If one side is $x$, area is $x(20-x)$ on $[0,20]$. Its unique interior critical point is $10$, and endpoint areas are zero, so the square is globally optimal."],
    ["Concept", "Give an example where $f'(c)=0$ but $c$ is neither a local maximum nor a local minimum.", "Take $f(x)=x^3$ at $c=0$. The derivative vanishes, but the function is strictly increasing through zero."],
    ["Proof", "Show that $f(x)=x+1/x$ has a global minimum on $(0,\\infty)$ and find it.", "Since $f'=1-1/x^2$, the function decreases on $(0,1)$ and increases on $(1,\\infty)$. Also $f\\to\\infty$ at both ends, so the minimum is $f(1)=2$."],
    ["Challenge", "Determine $\\lim_{x\\to\\infty}x\\ln(1+1/x)$.", "Rewrite as $\\ln(1+1/x)/(1/x)$ and apply L'Hôpital, or substitute $u=1/x$. The limit is $1$."],
    ["Core", "Evaluate $\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}$.", "L'Hôpital twice (or the half-angle identity): $\\lim\\dfrac{\\sin x}{2x}=\\tfrac12$."],
    ["Core", "Evaluate $\\lim_{x\\to0^+}x^x$.", "Write $x^x=e^{x\\ln x}$; since $x\\ln x\\to0$, the limit is $e^0=1$."],
    ["Core", "Evaluate $\\lim_{x\\to\\infty}\\left(1+\\dfrac2x\\right)^x$.", "Take logs: $x\\ln(1+2/x)\\to2$, so the limit is $e^2$."],
    ["Application", "A closed cylinder has fixed volume $V$. Show the surface area is minimized when the height equals the diameter.", "With $V=\\pi r^2h$, $S=2\\pi r^2+2V/r$ for $r>0$. Then $S'=4\\pi r-2V/r^2=0$ gives $r^3=V/(2\\pi)$ and $h=2r$. Since $S''=4\\pi+4V/r^3>0$ and $S\\to\\infty$ at both ends of the domain, this is the global minimum."],
    ["Application", "Find the rectangle of largest area with base on the $x$-axis inscribed under $y=12-x^2$.", "Area $A(x)=2x(12-x^2)=24x-2x^3$; $A'=24-6x^2=0$ gives $x=2$, so the maximal area is $2(2)(8)=32$."],
    ["Concept", "Show that applying L'Hôpital to $\\lim_{x\\to0}\\dfrac{x+1}{x+2}$ gives a wrong answer, and explain why.", "It is not an indeterminate form: the limit is $\\tfrac12$. Differentiating top and bottom gives $1$, which is invalid because L'Hôpital requires $0/0$ or $\\infty/\\infty$."],
    ["Core", "Find the intervals of concavity and the inflection point of $f(x)=x^3-3x$.", "$f''(x)=6x$, so $f$ is concave down on $(-\\infty,0)$ and concave up on $(0,\\infty)$, with an inflection at $x=0$."],
    ["Challenge", "Evaluate $\\lim_{x\\to0}\\left(\\dfrac{1}{\\sin x}-\\dfrac{1}{x}\\right)$.", "Combine: $\\dfrac{x-\\sin x}{x\\sin x}$. Both numerator and denominator vanish; L'Hôpital (or series) gives the limit $0$."]
  ],
  "07": [
    ["Core", "For $f(x)=x$ on $[0,1]$ with $n$ equal subintervals, compute the lower and upper sums and find their limits.", "The lower sum is $(n-1)/(2n)$ and the upper sum is $(n+1)/(2n)$. Both tend to $1/2$."],
    ["Core", "Prove that every constant function on $[a,b]$ is Riemann integrable and find its integral.", "Every lower and upper sum equals $c(b-a)$, so their common value is the integral."],
    ["Proof", "If $f$ is bounded on $[a,b]$ and differs from an integrable function $g$ at only one point, prove $f$ is integrable with the same integral.", "Choose a partition trapping the exceptional point in an interval of arbitrarily small length. The extra upper-lower gap is bounded by the oscillation times that length."],
    ["Concept", "Explain why a bounded function need not be Riemann integrable.", "The Dirichlet function, equal to $1$ on rationals and $0$ on irrationals, has lower sum $0$ and upper sum $b-a$ for every partition."],
    ["Proof", "Prove that if $0\\le f\\le g$ on $[a,b]$ and both are integrable, then $\\int_a^b f\\le\\int_a^b g$.", "The function $g-f$ is integrable and nonnegative, so every lower sum is nonnegative and therefore its integral is nonnegative."],
    ["Challenge", "Let $f(x)=x^2$ on $[0,1]$. Use endpoint sums to derive $\\int_0^1x^2\\,dx=1/3$.", "Right sums give $n^{-3}\\sum_{k=1}^n k^2=(n+1)(2n+1)/(6n^2)\\to1/3$. Left sums give $n^{-3}\\sum_{k=0}^{n-1}k^2=(n-1)(2n-1)/(6n^2)\\to1/3$, so the upper and lower sums squeeze to $1/3$."],
    ["Core", "Using right-endpoint sums, compute $\\int_0^2 x\\,dx$ from the definition.", "The sum is $\\dfrac2n\\sum_{k=1}^n\\dfrac{2k}{n}=\\dfrac{4}{n^2}\\cdot\\dfrac{n(n+1)}2=\\dfrac{2(n+1)}n\\to2$."],
    ["Core", "If $f$ is integrable and $m\\le f(x)\\le M$ on $[a,b]$, prove $m(b-a)\\le\\int_a^b f\\le M(b-a)$.", "Every lower sum is $\\ge m(b-a)$ and every upper sum is $\\le M(b-a)$; the integral lies between the sup of lower and inf of upper sums."],
    ["Proof", "Prove that $\\int_a^b f=\\int_a^c f+\\int_c^b f$ for integrable $f$ and $a<c<b$.", "Restrict attention to partitions that contain $c$. Their sums split as the sum over $[a,c]$ plus the sum over $[c,b]$; take suprema/infima."],
    ["Proof", "Prove that if $f$ is integrable and $\\lambda\\in\\mathbb{R}$, then $\\lambda f$ is integrable with $\\int\\lambda f=\\lambda\\int f$.", "For $\\lambda\\ge0$, $L(\\lambda f,P)=\\lambda L(f,P)$ and similarly for upper sums. For $\\lambda<0$, sup and inf swap, giving the same factor."],
    ["Concept", "State the integrability criterion and use it to show a bounded monotone $f$ is integrable.", "Criterion: for all $\\varepsilon>0$ there is $P$ with $U-L<\\varepsilon$. For monotone $f$ on a uniform partition, $U-L=|f(b)-f(a)|\\cdot\\tfrac{b-a}{n}\\to0$."],
    ["Proof", "Fix $c\\in(0,1)$ and let $f(x)=0$ for $x<c$ and $f(x)=1$ for $x\\ge c$. Prove $f$ is Riemann integrable and find its integral.", "Choose a partition that traps $c$ in an interval of length less than $\\varepsilon$. Every other subinterval has zero oscillation, so $U-L<\\varepsilon$. Thus $f$ is integrable, and its integral is the length of $[c,1]$, namely $1-c$."],
    ["Core", "Compute $\\int_0^1(2x+1)\\,dx$ from the definition using right-endpoint sums.", "The sum is $\\dfrac1n\\sum_{k=1}^n\\!\\left(\\dfrac{2k}{n}+1\\right)=\\dfrac{2}{n^2}\\cdot\\dfrac{n(n+1)}2+1\\to2$."],
    ["Challenge", "Outline a proof that every continuous function on $[a,b]$ is integrable.", "Continuity on a closed bounded interval is uniform: given $\\varepsilon$, choose $\\delta$ so $|f(x)-f(y)|<\\tfrac{\\varepsilon}{b-a}$ when $|x-y|<\\delta$. A partition finer than $\\delta$ makes each $M_i-m_i<\\tfrac{\\varepsilon}{b-a}$, so $U-L<\\varepsilon$."]
  ],
  "08": [
    ["Core", "Differentiate $F(x)=\\int_1^{x^2}\\cos(t^3)\\,dt$.", "FTC Part I and the chain rule give $F'(x)=2x\\cos(x^6)$."],
    ["Core", "Evaluate $\\int_0^2(3x^2-4x+1)\\,dx$.", "An antiderivative is $x^3-2x^2+x$. Evaluating from $0$ to $2$ gives $2$."],
    ["Concept", "If $F(x)=\\int_a^x f(t)\\,dt$, explain why $F'(x)=f(x)$ may fail when $f$ is discontinuous at $x$.", "FTC Part I requires continuity at the differentiation point. At a jump, averages over shrinking intervals need not approach the assigned function value."],
    ["Proof", "Suppose $f$ is continuous and $\\int_a^x f(t)\\,dt=0$ for every $x$. Prove $f$ is identically zero.", "Differentiate both sides using FTC Part I to obtain $f(x)=0$ at every point."],
    ["Application", "Find the area enclosed by $y=x$ and $y=x^2$.", "They meet at $0$ and $1$, with $x\\ge x^2$ between them. The area is $\\int_0^1(x-x^2)\\,dx=1/6$."],
    ["Challenge", "Let $G(x)=\\int_{x^2}^{x^3}e^{t^2}\\,dt$. Find $G'(x)$.", "Differentiate the upper and lower limits: $G'(x)=3x^2e^{x^6}-2xe^{x^4}$."],
    ["Core", "Differentiate $F(x)=\\int_0^x\\sin(t^2)\\,dt$.", "By FTC Part I, $F'(x)=\\sin(x^2)$."],
    ["Core", "Evaluate $\\int_1^4\\dfrac{dx}{\\sqrt{x}}$.", "An antiderivative is $2\\sqrt{x}$, so the value is $2\\sqrt4-2\\sqrt1=2$."],
    ["Core", "Differentiate $F(x)=\\int_x^{2x}e^{t^2}\\,dt$.", "$F'(x)=2e^{(2x)^2}-e^{x^2}=2e^{4x^2}-e^{x^2}$."],
    ["Proof", "If $f$ is continuous, $f\\ge0$ on $[a,b]$, and $\\int_a^b f=0$, prove $f\\equiv0$.", "If $f(c)>0$, continuity makes $f>\\tfrac{f(c)}2$ on a small interval, forcing the integral to be positive — a contradiction."],
    ["Application", "Find the area under $y=1/x^2$ from $x=1$ to $x=3$.", "$\\int_1^3 x^{-2}\\,dx=[-1/x]_1^3=1-\\tfrac13=\\tfrac23$."],
    ["Core", "Evaluate $\\int_0^{\\pi/2}\\cos x\\,dx$.", "$[\\sin x]_0^{\\pi/2}=1$."],
    ["Concept", "Explain the difference between FTC Part I and Part II.", "Part I says the accumulation function $\\int_a^x f$ is an antiderivative of a continuous $f$. Part II says a definite integral equals the change in any antiderivative."],
    ["Challenge", "Find a continuous $f$ with $\\int_0^x f(t)\\,dt=x\\sin x$ for all $x$.", "Differentiate using FTC Part I: $f(x)=\\dfrac{d}{dx}(x\\sin x)=\\sin x+x\\cos x$."]
  ],
  "09": [
    ["Core", "Evaluate $\\int x(1+x^2)^5\\,dx$.", "Let $u=1+x^2$, so $du=2x\\,dx$. The result is $(1+x^2)^6/12+C$."],
    ["Core", "Evaluate $\\int xe^x\\,dx$ by parts.", "Choose $u=x$ and $dv=e^x\\,dx$. Then the result is $xe^x-e^x+C$."],
    ["Core", "Evaluate $\\int dx/(x^2-4)$ using partial fractions.", "Write $1/(x^2-4)=\\tfrac14(1/(x-2)-1/(x+2))$. Integrate to get $\\tfrac14\\ln|(x-2)/(x+2)|+C$."],
    ["Concept", "Explain why substitution in a definite integral requires either changing the bounds or returning to the original variable.", "After substitution the differential and integrand use the new variable. Bounds must describe values of that same variable; mixing variables makes the expression undefined."],
    ["Application", "Evaluate $\\int_0^1x\\ln(1+x)\\,dx$.", "Use integration by parts with $u=\\ln(1+x)$ and $dv=x\\,dx$, then simplify the remaining rational integral. The value is $1/4$."],
    ["Challenge", "Evaluate $\\int\\sqrt{1-x^2}\\,dx$ for $|x|<1$.", "Use $x=\\sin\\theta$. The integral becomes $\\int\\cos^2\\theta\\,d\\theta$, giving $\\tfrac12(x\\sqrt{1-x^2}+\\arcsin x)+C$."],
    ["Core", "Evaluate $\\int x^2e^x\\,dx$.", "Integrate by parts twice: $\\int x^2e^x\\,dx=e^x(x^2-2x+2)+C$."],
    ["Core", "Evaluate $\\int\\dfrac{dx}{x^2+4}$.", "$\\dfrac12\\arctan\\!\\left(\\dfrac x2\\right)+C$."],
    ["Core", "Evaluate $\\int\\tan x\\,dx$.", "With $u=\\cos x$, $\\int\\tan x\\,dx=-\\ln|\\cos x|+C$."],
    ["Core", "Evaluate $\\int\\dfrac{2x+3}{x^2+3x+5}\\,dx$.", "The numerator is the derivative of the denominator, so the integral is $\\ln|x^2+3x+5|+C$."],
    ["Application", "Evaluate $\\int\\dfrac{x+1}{x^2-x}\\,dx$ by partial fractions.", "$\\dfrac{x+1}{x(x-1)}=\\dfrac{-1}{x}+\\dfrac{2}{x-1}$, so the integral is $-\\ln|x|+2\\ln|x-1|+C$."],
    ["Core", "Evaluate $\\int\\dfrac{dx}{\\sqrt{4-x^2}}$.", "$\\arcsin\\!\\left(\\dfrac x2\\right)+C$ (let $x=2\\sin\\theta$)."],
    ["Concept", "When evaluating $\\int_0^1 2x\\,e^{x^2}\\,dx$ by $u=x^2$, what happens to the bounds?", "They become $u=0$ to $u=1$, giving $\\int_0^1 e^u\\,du=e-1$; the limits must track the new variable."],
    ["Challenge", "Evaluate $\\int e^x\\sin x\\,dx$.", "Integrate by parts twice and solve for the integral: $\\int e^x\\sin x\\,dx=\\tfrac12 e^x(\\sin x-\\cos x)+C$."]
  ],
  "10": [
    ["Core", "Find the area between $y=2x$ and $y=x^2$.", "They meet at $0$ and $2$, and $2x\\ge x^2$ there. The area is $\\int_0^2(2x-x^2)\\,dx=4/3$."],
    ["Core", "Find the volume obtained by rotating the region under $y=x$ on $[0,2]$ about the $x$-axis.", "Using disks, $V=\\pi\\int_0^2x^2\\,dx=8\\pi/3$."],
    ["Application", "Use cylindrical shells to find the volume obtained by rotating the region under $y=1-x^2$ on $[0,1]$ about the $y$-axis.", "A shell has radius $x$ and height $1-x^2$. Thus $V=2\\pi\\int_0^1x(1-x^2)\\,dx=\\pi/2$."],
    ["Concept", "Explain how to decide whether washers or shells are more convenient for a volume-of-revolution problem.", "Choose slices that describe the region with the fewest pieces. Perpendicular slices produce washers; parallel slices produce shells."],
    ["Core", "Find the average value of $f(x)=x^2$ on $[-1,2]$.", "The average is $\\frac13\\int_{-1}^2x^2\\,dx=1$."],
    ["Challenge", "Set up, but do not evaluate, the arc length of $y=\\ln x$ from $x=1$ to $x=e$.", "Since $y'=1/x$, the length is $\\int_1^e\\sqrt{1+1/x^2}\\,dx$."],
    ["Core", "Find the area between $y=x^2$ and $y=x+2$.", "They meet at $x=-1,2$ with $x+2\\ge x^2$ between. The area is $\\int_{-1}^2(x+2-x^2)\\,dx=\\tfrac92$."],
    ["Core", "Rotate the region under $y=\\sqrt{x}$ on $[0,4]$ about the $x$-axis; find the volume.", "Disks: $V=\\pi\\int_0^4(\\sqrt x)^2\\,dx=\\pi\\int_0^4 x\\,dx=8\\pi$."],
    ["Application", "Rotate the first-quadrant region between $y=x$ and $y=x^2$ about the $x$-axis.", "Washers: $V=\\pi\\int_0^1(x^2-x^4)\\,dx=\\pi\\!\\left(\\tfrac13-\\tfrac15\\right)=\\tfrac{2\\pi}{15}$."],
    ["Core", "Find the volume of a sphere of radius $R$ by the disk method.", "$V=\\int_{-R}^{R}\\pi(R^2-x^2)\\,dx=\\pi\\!\\left[R^2x-\\tfrac{x^3}3\\right]_{-R}^{R}=\\tfrac43\\pi R^3$."],
    ["Application", "Find the arc length of $y=\\tfrac23 x^{3/2}$ on $[0,3]$.", "$y'=x^{1/2}$, so $1+(y')^2=1+x$ and the length is $\\int_0^3\\sqrt{1+x}\\,dx=\\tfrac23(8-1)=\\tfrac{14}{3}$."],
    ["Core", "Find the average value of $f(x)=\\sin x$ on $[0,\\pi]$.", "$\\dfrac1\\pi\\int_0^\\pi\\sin x\\,dx=\\dfrac2\\pi$."],
    ["Concept", "Explain when cylindrical shells are more convenient than washers for a solid of revolution.", "Shells suit rotation about an axis parallel to the slicing direction (often a vertical axis with vertical strips), avoiding the need to solve the boundary for the other variable."],
    ["Challenge", "Rotate the region under $y=e^{-x}$ on $[0,\\infty)$ about the $x$-axis; find the volume.", "$V=\\pi\\int_0^\\infty e^{-2x}\\,dx=\\pi\\cdot\\tfrac12=\\tfrac\\pi2$."]
  ],
  "11": [
    ["Core", "Prove from the definition that $a_n=1/n$ converges to $0$.", "Given $\\varepsilon>0$, choose a natural $N>1/\\varepsilon$. Then $n\\ge N$ implies $|1/n|\\le1/N<\\varepsilon$."],
    ["Core", "Determine whether $a_n=(-1)^n$ converges.", "It diverges. The even subsequence is constantly $1$ and the odd subsequence constantly $-1$, so subsequences have different limits."],
    ["Proof", "Prove that every convergent sequence is bounded.", "Choose $N$ so that $|a_n-L|<1$ for $n\\ge N$. The tail is bounded by $|L|+1$; combine this with the finite maximum of the first $N-1$ terms."],
    ["Concept", "Give a bounded sequence that does not converge and explain why boundedness alone is insufficient.", "The sequence $(-1)^n$ is bounded between $-1$ and $1$ but oscillates between two values."],
    ["Proof", "Suppose $a_n$ is increasing and bounded above. Prove it converges.", "Let $L=\\sup\\{a_n:n\\in\\mathbb N\\}$. For any $\\varepsilon>0$, some $a_N>L-\\varepsilon$; monotonicity then traps all later terms between $L-\\varepsilon$ and $L$."],
    ["Challenge", "Let $a_1=1$ and $a_{n+1}=\\sqrt{2+a_n}$. Prove the sequence converges and find its limit.", "Show inductively that $a_n<2$ and that it is increasing. Monotone convergence gives a limit $L$, and $L=\\sqrt{2+L}$ with $L\\ge0$, so $L=2$."],
    ["Core", "Evaluate $\\lim_{n\\to\\infty}\\dfrac{n^2+1}{n^2+n}$.", "Divide by $n^2$: $\\dfrac{1+1/n^2}{1+1/n}\\to1$."],
    ["Core", "Evaluate $\\lim_{n\\to\\infty}\\dfrac{\\ln n}{n}$.", "Apply L'Hôpital to the corresponding function: $\\dfrac{1/x}{1}\\to0$, so the sequence limit is $0$."],
    ["Proof", "Prove from the definition that $\\lim_{n\\to\\infty}1/n^2=0$.", "Given $\\varepsilon>0$, choose $N>1/\\sqrt{\\varepsilon}$. Then $n\\ge N$ implies $1/n^2\\le1/N^2<\\varepsilon$."],
    ["Proof", "Use the squeeze theorem to prove $\\lim_{n\\to\\infty}\\dfrac{\\sin n}{n}=0$.", "$-\\dfrac1n\\le\\dfrac{\\sin n}{n}\\le\\dfrac1n$, and both bounds tend to $0$."],
    ["Core", "Evaluate $\\lim_{n\\to\\infty}\\dfrac{2^n+n^2}{2^{n+1}+n}$.", "Divide by $2^n$: $\\dfrac{1+n^2/2^n}{2+n/2^n}\\to\\dfrac12$, since $n^2/2^n\\to0$."],
    ["Recurrence", "Let $a_1=2$, $a_{n+1}=\\tfrac12\\!\\left(a_n+\\tfrac6{a_n}\\right)$. Show it converges and find the limit.", "All terms are positive, and $a_2=5/2>\\sqrt6$. AM-GM gives $a_{n+1}\\ge\\sqrt6$, and whenever $a_n\\ge\\sqrt6$, $a_{n+1}\\le a_n$. Thus the tail from $a_2$ onward decreases and is bounded below. Its positive limit solves $L=\\tfrac12(L+6/L)$, so $L=\\sqrt6$."],
    ["Challenge", "Prove that $\\lim_{n\\to\\infty}n^{1/n}=1$.", "Write $n^{1/n}=1+h_n$ with $h_n\\ge0$. Then $n=(1+h_n)^n\\ge\\tfrac{n(n-1)}2 h_n^2$, so $h_n^2\\le\\tfrac{2}{n-1}\\to0$, hence $h_n\\to0$."],
    ["Core", "Evaluate $\\lim_{n\\to\\infty}n\\sin(1/n)$.", "Write it as $\\dfrac{\\sin(1/n)}{1/n}$. As $n\\to\\infty$, $1/n\\to0$ and the quotient tends to $1$."]
  ],
  "12": [
    ["Core", "Determine for which real $p$ the integral $\\int_1^\\infty x^{-p}\\,dx$ converges.", "For $p\\ne1$, integrate and take the limit. It converges exactly when $p>1$. For $p=1$, the logarithm diverges."],
    ["Core", "Determine whether $\\int_0^1x^{-2/3}\\,dx$ converges and evaluate it if it does.", "It converges because the exponent is less than $1$. The value is $[3x^{1/3}]_0^1=3$."],
    ["Comparison", "Prove that $\\int_1^\\infty1/(x^2+x)\\,dx$ converges by comparison.", "For $x\\ge1$, $0<1/(x^2+x)\\le1/x^2$, and the comparison integral converges."],
    ["Concept", "Give two positive functions $f\\le g$ on $[1,\\infty)$ such that $\\int f$ converges while $\\int g$ diverges.", "Take $f(x)=1/x^2$ and $g(x)=1/x$. This shows the converse direction of the comparison test is invalid."],
    ["Core", "Evaluate $\\int_0^\\infty e^{-3x}\\,dx$.", "Evaluate on $[0,t]$ and let $t\\to\\infty$: the result is $1/3$."],
    ["Challenge", "Determine whether $\\int_2^\\infty1/(x\\ln x)\\,dx$ converges.", "Substitute $u=\\ln x$. The integral becomes $\\int_{\\ln2}^\\infty du/u$, which diverges."],
    ["Core", "Evaluate $\\int_1^\\infty\\dfrac{dx}{x^3}$.", "$\\int_1^t x^{-3}\\,dx=\\tfrac12(1-t^{-2})\\to\\tfrac12$."],
    ["Core", "Evaluate $\\int_0^\\infty x e^{-x^2}\\,dx$.", "Antiderivative $-\\tfrac12 e^{-x^2}$; the value is $\\tfrac12$."],
    ["Core", "Evaluate $\\int_{-\\infty}^{\\infty}\\dfrac{dx}{1+x^2}$.", "Split at $0$. The two improper integrals are $[\\arctan x]_{-\\infty}^{0}=\\pi/2$ and $[\\arctan x]_{0}^{\\infty}=\\pi/2$, so the total is $\\pi$."],
    ["Comparison", "Determine whether $\\int_1^\\infty\\dfrac{dx}{x^2+\\sqrt{x}}$ converges.", "For $x\\ge1$, $0<\\dfrac{1}{x^2+\\sqrt x}\\le\\dfrac1{x^2}$, and $\\int_1^\\infty x^{-2}$ converges, so it converges."],
    ["Comparison", "Determine whether $\\int_1^\\infty\\dfrac{2+\\sin x}{x}\\,dx$ converges.", "Since $2+\\sin x\\ge1$, $\\dfrac{2+\\sin x}{x}\\ge\\dfrac1x$, and $\\int_1^\\infty dx/x$ diverges, so it diverges."],
    ["Concept", "For the integrand $1/x^p$, state where the trouble is for $\\int_1^\\infty$ versus $\\int_0^1$.", "$\\int_1^\\infty x^{-p}$ converges iff $p>1$ (issue at $\\infty$); $\\int_0^1 x^{-p}$ converges iff $p<1$ (issue at $0$)."],
    ["Core", "Determine whether $\\int_0^2\\dfrac{dx}{(x-1)^2}$ converges.", "It diverges. Split at the interior singularity $x=1$; for example, $\\int_0^t (x-1)^{-2}\\,dx=-(t-1)^{-1}-1\\to\\infty$ as $t\\to1^-$."],
    ["Challenge", "For which $p$ does $\\int_2^\\infty\\dfrac{dx}{x(\\ln x)^p}$ converge?", "Substitute $u=\\ln x$: $\\int_{\\ln2}^\\infty u^{-p}\\,du$ converges iff $p>1$."]
  ],
  "13": [
    ["Core", "Determine whether $\\sum_{n=1}^\\infty n/(n^3+1)$ converges.", "For large $n$ the term behaves like $1/n^2$. Limit comparison with $1/n^2$ gives a positive finite limit, so the series converges."],
    ["Core", "Determine whether $\\sum_{n=1}^\\infty(3n+1)/(2n+5)$ converges.", "The terms tend to $3/2$, not zero. The series diverges by the divergence test."],
    ["Core", "Classify $\\sum_{n=1}^\\infty(-1)^{n+1}/n^{2/3}$ as absolute, conditional, or divergent.", "It converges by the alternating series test, but the absolute series is a divergent $p$-series with $p=2/3$. Thus convergence is conditional."],
    ["Proof", "Prove that if $\\sum|a_n|$ converges, then $\\sum a_n$ converges.", "For partial sums, $|\\sum_{k=m}^na_k|\\le\\sum_{k=m}^n|a_k|$. The absolute-series tails approach zero, so the original partial sums are Cauchy."],
    ["Core", "Find the sum of $\\sum_{n=0}^\\infty5(1/3)^n$.", "It is geometric with first term $5$ and ratio $1/3$, so the sum is $5/(1-1/3)=15/2$."],
    ["Challenge", "Determine whether $\\sum_{n=2}^\\infty1/(n\\ln n)$ converges.", "Use the integral test. Since $\\int_2^t dx/(x\\ln x)=\\ln(\\ln t)-\\ln(\\ln2)$ diverges, so does the series."],
    ["Core", "Find $\\sum_{n=1}^\\infty\\dfrac{1}{n(n+1)}$ using partial sums.", "$\\dfrac1{n(n+1)}=\\dfrac1n-\\dfrac1{n+1}$ telescopes; the partial sums are $1-\\dfrac1{N+1}\\to1$."],
    ["Core", "Find $\\sum_{n=0}^\\infty\\left(\\tfrac23\\right)^n$.", "Geometric with ratio $\\tfrac23$: the sum is $\\dfrac1{1-2/3}=3$."],
    ["Core", "Determine whether $\\sum_{n=1}^\\infty\\dfrac{n}{n+1}$ converges.", "The terms tend to $1\\ne0$, so the series diverges by the divergence test."],
    ["Ratio", "Use the ratio test on $\\sum_{n=1}^\\infty\\dfrac{n!}{n^n}$.", "$\\dfrac{a_{n+1}}{a_n}=\\left(\\dfrac{n}{n+1}\\right)^n=\\dfrac1{(1+1/n)^n}\\to\\dfrac1e<1$, so it converges."],
    ["Comparison", "Determine whether $\\sum_{n=1}^\\infty\\dfrac{1}{n^2+1}$ converges.", "$0<\\dfrac1{n^2+1}\\le\\dfrac1{n^2}$, and $\\sum1/n^2$ converges, so it converges."],
    ["Root", "Use the root test on $\\sum_{n=1}^\\infty\\left(\\dfrac{n}{2n+1}\\right)^n$.", "$|a_n|^{1/n}=\\dfrac{n}{2n+1}\\to\\dfrac12<1$, so it converges."],
    ["Concept", "State the $p$-series result and justify it with the integral test.", "$\\sum 1/n^p$ converges iff $p>1$, because $\\int_1^\\infty x^{-p}\\,dx$ converges exactly when $p>1$."],
    ["Challenge", "Classify $\\sum_{n=1}^\\infty\\dfrac{(-1)^n}{n}$ as absolutely convergent, conditionally convergent, or divergent.", "The alternating series test gives convergence, but $\\sum1/n$ diverges, so it is conditionally convergent."]
  ],
  "14": [
    ["Core", "Find the radius and interval of convergence of $\\sum_{n=1}^\\infty x^n/n$.", "The ratio or root test gives radius $1$. At $x=1$ the harmonic series diverges; at $x=-1$ the alternating harmonic series converges. The interval is $[-1,1)$."],
    ["Core", "Find the degree-$3$ Taylor polynomial of $e^x$ about $0$.", "Since every derivative of $e^x$ at $0$ is $1$, the polynomial is $1+x+x^2/2+x^3/6$."],
    ["Core", "Find the radius of convergence of $\\sum_{n=0}^\\infty n!x^n$.", "The ratio of successive absolute terms is $(n+1)|x|$, which diverges for every $x\\ne0$. The radius is $0$."],
    ["Proof", "Within its interval of convergence, differentiate $\\sum_{n=0}^\\infty x^n=1/(1-x)$ to obtain a new series identity.", "Termwise differentiation gives $\\sum_{n=1}^\\infty nx^{n-1}=1/(1-x)^2$ for $|x|<1$."],
    ["Approximation", "Use the first four nonzero terms of the exponential series to approximate $e^{-1}$.", "Substitute $x=-1$ into $1+x+x^2/2+x^3/6+\\cdots$. The four-term approximation is $1-1+1/2-1/6=1/3$."],
    ["Challenge", "Find the Taylor series of $\\ln(1+x)$ and state its interval of convergence.", "Integrate the geometric series for $1/(1+x)=\\sum_{n=0}^\\infty(-1)^nx^n$. This gives $\\sum_{n=1}^\\infty(-1)^{n+1}x^n/n$, converging on $(-1,1]$."],
    ["Core", "Find the radius and interval of convergence of $\\sum_{n=1}^\\infty\\dfrac{x^n}{n^2}$.", "The ratio test gives radius $1$. At $x=\\pm1$ the series $\\sum1/n^2$ converges, so the interval is $[-1,1]$."],
    ["Core", "Find the interval of convergence of $\\sum_{n=0}^\\infty\\dfrac{(x-2)^n}{3^n}$.", "Geometric in $(x-2)/3$: it converges for $|x-2|<3$, i.e. $(-1,5)$, and diverges at both endpoints."],
    ["Core", "Find the Maclaurin series of $\\cos x$.", "$\\cos x=\\sum_{n=0}^\\infty\\dfrac{(-1)^n x^{2n}}{(2n)!}$, valid for all $x$."],
    ["Application", "Find the Maclaurin series of $e^{x^2}$.", "Substitute $x^2$ into $e^u=\\sum u^n/n!$ to get $\\sum_{n=0}^\\infty\\dfrac{x^{2n}}{n!}$."],
    ["Approximation", "Estimate $\\int_0^1\\sin(x^2)\\,dx$ using the first two nonzero terms of the series.", "$\\sin(x^2)=x^2-\\tfrac{x^6}{6}+\\cdots$, so $\\int_0^1\\approx\\tfrac13-\\tfrac1{42}=\\tfrac{13}{42}\\approx0.31$."],
    ["Proof", "Use the Lagrange remainder to show the Maclaurin series of $e^x$ converges to $e^x$ for every $x$.", "$|R_n(x)|=\\dfrac{e^{c}|x|^{n+1}}{(n+1)!}\\le\\dfrac{e^{|x|}|x|^{n+1}}{(n+1)!}\\to0$ as $n\\to\\infty$."],
    ["Concept", "Why must endpoints of an interval of convergence be checked separately?", "The ratio/root test only determines behavior for $|x-a|<R$; at $|x-a|=R$ the limit is $1$ and the test is inconclusive, so each endpoint needs its own test."],
    ["Challenge", "Find the Maclaurin series of $\\arctan x$ and its interval of convergence.", "Integrate $\\dfrac1{1+x^2}=\\sum_{n=0}^\\infty(-1)^n x^{2n}$ term by term: $\\arctan x=\\sum_{n=0}^\\infty\\dfrac{(-1)^n x^{2n+1}}{2n+1}$, converging on $[-1,1]$."]
  ]
};

function makeAssessmentElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function addMAT137AssessmentPractice() {
  const match = window.location.pathname.match(/\/MAT137\/unit(\d{2})\.html$/);
  const questions = match && MAT137_ASSESSMENT_BANK[match[1]];
  const container = document.querySelector(".container");
  const nav = document.querySelector(".navrow");
  if (!questions || !container || !nav) return;

  const section = makeAssessmentElement("div", "block reveal assessment-bank");
  section.append(makeAssessmentElement("h3", "", "Assessment-style question bank"));
  section.append(makeAssessmentElement(
    "p",
    "assessment-note",
    "Original MAT137-level questions modeled on common in-class, term-test, and final-exam patterns. These are not copied past-assessment questions."
  ));

  const practice = makeAssessmentElement("div", "prac");
  questions.forEach(function (item, index) {
    const card = makeAssessmentElement("div", "q");
    card.append(makeAssessmentElement("div", "ql", "Assessment " + (index + 1) + " · " + item[0]));
    card.append(makeAssessmentElement("p", "", item[1]));
    const details = makeAssessmentElement("details");
    details.append(makeAssessmentElement("summary", "", "Solution outline"));
    details.append(makeAssessmentElement("div", "ans", item[2]));
    card.append(details);
    practice.append(card);
  });

  section.append(practice);
  container.insertBefore(section, nav);
}

document.addEventListener("DOMContentLoaded", addMAT137AssessmentPractice);
