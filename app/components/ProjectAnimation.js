// CardAnimation.js
"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import { FaGithub } from "react-icons/fa";

const ProjectAnimation = () => {
  useEffect(() => {
    var x;
    var $cards = $(".card");
    var $style = $(".hover");

    $cards
      .on("mousemove touchmove", function (e) {
        var pos = [e.offsetX, e.offsetY];
        e.preventDefault();
        if (e.type === "touchmove") {
          pos = [e.touches[0].clientX, e.touches[0].clientY];
        }
        var $card = $(this);
        var l = pos[0];
        var t = pos[1];
        var h = $card.height();
        var w = $card.width();
        var px = Math.abs(Math.floor((100 / w) * l) - 100);
        var py = Math.abs(Math.floor((100 / h) * t) - 100);
        var pa = 50 - px + (50 - py);
        var lp = 50 + (px - 50) / 1.5;
        var tp = 50 + (py - 50) / 1.5;
        var px_spark = 50 + (px - 50) / 7;
        var py_spark = 50 + (py - 50) / 7;
        var p_opc = 20 + Math.abs(pa) * 1.5;
        var ty = ((tp - 50) / 2) * -1;
        var tx = ((lp - 50) / 1.5) * 0.5;

        var grad_pos = `background-position: ${lp}% ${tp}%;`;
        var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        var opc = `opacity: ${p_opc / 100};`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        var style = `
        .card:hover:before { ${grad_pos} }  
        .card:hover:after { ${sprk_pos} ${opc} }  
      `;

        $cards.removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        $style.html(style);
        if (e.type === "touchmove") {
          return false;
        }
        clearTimeout(x);
      })
      .on("mouseout touchend touchcancel", function () {
        var $card = $(this);
        $style.html("");
        $card.removeAttr("style");
        x = setTimeout(function () {
          $card.addClass("animated");
        }, 2500);
      });

    return () => {
      $cards.off("mousemove touchmove");
      $cards.off("mouseout touchend touchcancel");
    };
  }, []);
  return (
    <div className="card-animation">
      <div className=" flex flex-wrap justify-center">
        <article className="flex flex-col items-center gap-4">
          <a href="https://pokemon-green-gamma.vercel.app" target="_blank">
            <div className="card pokemon animated">
              <div className="flex justify-center items-center p-2 container-title-project">
                <h3 className="title-project">Pokemon Store</h3>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/luciemtro/pokemon"
            className="cursor-pointer hover:scale-125 transform transition-transform duration-500 ease-in-out hover:text-purple-500 "
            target="_blank"
          >
            <FaGithub size={45} />
          </a>
        </article>
        <div className="card drinksaver animated">
          <div className="flex justify-center items-center p-2 container-title-project">
            <h3 className="title-project">Drink Saver</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnimation;
