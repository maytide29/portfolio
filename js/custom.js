$(function () {
  $(".navi li").on("click", function () {
    let i = $(this).index();
    $(".navi li").removeClass("on");
    $(this).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    base = -300;
    let home01 = $(".home").offset().top;
    let profile02 = $(".profile").offset().top;
    let logo03 = $(".logo").offset().top;
    let design04 = $(".design").offset().top;
    let clone05 = $(".clone").offset().top;
    let illust06 = $(".illust").offset().top;
    let contact07 = $(".contact").offset().top;
    let contact07b = $(".contact").offset().bottom;
    if (home01 + base <= scroll && scroll < profile02 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(1)").addClass("on");
      $("section").removeClass("on");
      $(".home").addClass("on");
    } else if (profile02 + base < scroll && scroll <= logo03 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(2)").addClass("on");
      $("section").removeClass("on");
      $(".profile").addClass("on");
    } else if (logo03 + base < scroll && scroll <= design04 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(3)").addClass("on");
      $("section").removeClass("on");
      $(".logo").addClass("on");
    } else if (design04 + base < scroll && scroll <= clone05 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(4)").addClass("on");
      $("section").removeClass("on");
      $(".design").addClass("on");
    } else if (clone05 + base < scroll && scroll <= illust06 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(5)").addClass("on");
      $("section").removeClass("on");
      $(".clone").addClass("on");
    } else if (illust06 + base < scroll && scroll <= contact07 + base) {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(6)").addClass("on");
      $("section").removeClass("on");
      $(".illust").addClass("on");
    } else {
      $(".navi li").removeClass("on");
      $(".navi li:nth-child(7)").addClass("on");
      $("section").removeClass("on");
      $(".contact").addClass("on");
    }
  });
  $(".mockup").on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let scrollHeight = $(this).prop("scrollHeight");
    let clientHeight = $(this).height();
  });

  // const swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   loop: true,
  //   grabCursor: true,

  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },

  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },

  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  // $(".pdf-open").on("click", function (e) {
  //   e.preventDefault();

  //   const pdf = $(this).attr("href");

  //   $(".pdf-modal iframe").attr("src", pdf);
  //   $(".pdf-modal").css("display", "flex");

  //   // Swiper 자동재생 정지
  //   swiper.autoplay.stop();

  //   console.log("Swiper 정지!");
  // });

  // $(".pdf-close, .pdf-modal-bg").on("click", function () {
  //   $(".pdf-modal").hide();
  //   $(".pdf-modal iframe").attr("src", "");

  //   // Swiper 자동재생 재시작
  //   swiper.autoplay.start();

  //   console.log("Swiper 재시작!");
  // });

  const swipers = [];

  document.querySelectorAll(".mySwiper").forEach((el) => {
    const swiper = new Swiper(el, {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      grabCursor: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });

    swipers.push(swiper);
  });

  // PDF 열기
  $(".pdf-open").on("click", function (e) {
    e.preventDefault();

    const pdf = $(this).attr("href");

    $(".pdf-modal iframe").attr("src", pdf);
    $(".pdf-modal").css("display", "flex");

    // Swiper 자동재생 정지
    swipers.forEach(function (swiper) {
      // 구버전 Swiper
      if (typeof swiper.stopAutoplay === "function") {
        swiper.stopAutoplay();
      }

      // 신버전 Swiper
      else if (swiper.autoplay && typeof swiper.autoplay.stop === "function") {
        swiper.autoplay.stop();
      }
    });

    console.log("Swiper 정지!");
  });

  // PDF 닫기
  $(".pdf-close, .pdf-modal-bg").on("click", function () {
    $(".pdf-modal").hide();
    $(".pdf-modal iframe").attr("src", "");

    // Swiper 자동재생 재시작
    swipers.forEach(function (swiper) {
      // 구버전 Swiper
      if (typeof swiper.startAutoplay === "function") {
        swiper.startAutoplay();
      }

      // 신버전 Swiper
      else if (swiper.autoplay && typeof swiper.autoplay.start === "function") {
        swiper.autoplay.start();
      }
    });

    console.log("Swiper 재시작!");
  });

  //스크롤 이벤트
  // 개별적으로 Wheel 이벤트 적용
  let elm = "body section";
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("wheel", function (e) {
      e.preventDefault();
      let delta = e.originalEvent.deltaY;
      let moveTop = 0;
      let elmSelecter = $(elm).eq(index);

      // 아래로 스크롤
      if (delta > 0) {
        let next = $(elmSelecter).next();

        if (next.length) {
          moveTop = next.offset().top;
        }
      }
      // 위로 스크롤
      else {
        let prev = $(elmSelecter).prev();

        if (prev.length) {
          moveTop = prev.offset().top;
        }
      }

      $("html, body").stop().animate(
        {
          scrollTop: moveTop,
        },
        500,
      );
    });
  });
});
