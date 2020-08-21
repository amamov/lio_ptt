import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";

const Intro = () => {
  return (
    <div className="body">
      {/* <div id="loader" className="my-auto text-sm">
    Loding
  </div>  */}
      <div id="container" className="container">
        <div>
          <span id="title" className="block text-xl mb-4">
            스트레스,
            <br />
            행복을 위해 소멸되다.
          </span>
          <span id="sub-title" className="block mb-4">
            community platform
            <br />
            2020.
          </span>
        </div>
        <div id="description" className="w-full h-25rem overflow-auto">
          Linear algebra is central to almost all areas of mathematics. For
          instance, linear algebra is fundamental in modern presentations of
          geometry, including for defining basic objects such as lines, planes
          and rotations. Also, functional analysis, a branch of mathematical
          analysis, may be viewed as basically the application of linear algebra
          to spaces of functions. Linear algebra is also used in most sciences
          and fields of engineering, because it allows modeling many natural
          phenomena, and computing efficiently with such models. For nonlinear
          systems, which cannot be modeled with linear algebra, it is often used
          for dealing with first-order approximations, using the fact that the
          differential of a multivariate function at a point is the linear map
          that best approximates the function near that point. The procedure for
          solving simultaneous linear equations now called Gaussian elimination
          appears in the ancient Chinese mathematical text Chapter Eight:
          Rectangular Arrays of The Nine Chapters on the Mathematical Art. Its
          use is illustrated in eighteen problems, with two to five
          equations.[4] Systems of linear equations arose in Europe with the
          introduction in 1637 by René Descartes of coordinates in geometry. In
          fact, in this new geometry, now called Cartesian geometry, lines and
          planes are represented by linear equations, and computing their
          intersections amounts to solving systems of linear equations. The
          first systematic methods for solving linear systems used determinants,
          first considered by Leibniz in 1693. In 1750, Gabriel Cramer used them
          for giving explicit solutions of linear systems, now called Cramer's
          rule. Later, Gauss further described the method of elimination, which
          was initially listed as an advancement in geodesy.[5] In 1844 Hermann
          Grassmann published his "Theory of Extension" which included
          foundational new topics of what is today called linear algebra. In
          1848, James Joseph Sylvester introduced the term matrix, which is
          Latin for womb.Arthur Cayley introduced matrix multiplication and the
          inverse matrix in 1856, making possible the general linear group. The
          mechanism of group representation became available for describing
          complex and hypercomplex numbers. Crucially, Cayley used a single
          letter to denote a matrix, thus treating a matrix as an aggregate
          object. He also realized the connection between matrices and
          determinants, and wrote "There would be many things to say about this
          theory of matrices which should, it seems to me, precede the theory of
          determinants".[5]
        </div>
        {/* <div className="move-bt">

        </div> */}
        <Link to={{ pathname: "./test1" }} className="move-bt">
          테스트 시작하기
        </Link>
      </div>
    </div>
  );
};

export default Intro;
