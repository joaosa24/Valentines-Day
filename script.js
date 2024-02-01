$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".cartao").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".cartao").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });