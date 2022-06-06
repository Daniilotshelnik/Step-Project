//Service Tabs//

let titles = document.querySelectorAll('.tab');

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', (event) => {

    let oldActive = document.querySelector('.tab.active');
    oldActive.classList.remove('active');
    event.target.classList.add('active');

    let activeContent = document.querySelector('[data-active-content]');
    activeContent.removeAttribute('data-active-content');

    let contents = document.querySelectorAll('.tab-content');
    let content = contents[i];
    content.setAttribute('data-active-content', '');
  });
};

//AMAZING WORK//

let imageArray = document.getElementsByClassName("work-image-item");
let clicked = 0;
console.log(imageArray);

$(function loadMore() {
  $("#loader").hide();
  for (let index = 0; index < 12; index++) {
    $(imageArray[index]).show();
  }
  $("#loadMore").on("click", function(event) {
    clicked++;
    $("#loader").show();
    $("#loadMore").hide();
    if (clicked == 1) {
      setTimeout(function() {
        $("#loader").hide();
        for (let index = 12; index < 36; index++) {
          $(imageArray[index]).fadeIn("slow");
        }
        $("#loadMore").show();
      }, 1000);
    }
    if (clicked == 2) {
      setTimeout(function() {
        $("#loader").hide();
        for (let index = 24; index < imageArray.length; index++) {
          $(imageArray[index]).fadeIn("slow");
        }
        $("#loadMore").hide();
      }, 1000);
    }
  });
});

$(function filter() {
  $(".work-tab-item").on("click", function() {
    $(".work-image-item").hide();
    $(".work-tab-item").removeClass("work-tab-active");
    $(this).addClass("work-tab-active");
    imageArray = document.getElementsByClassName($(this).attr("data-type"));
    for (let index = 0; index < 12; index++) {
      $(imageArray[index]).show();
    }
    if ($(imageArray).length <= 12) {
      $("#loadMore").hide();
    } else {
      $("#loadMore").show();
    }
  });
});

//What People Say About TheHam//

let hero = 0;
$(function carousel() {
  $("#sliderList li:first-child")
    .addClass("active")
    .animate({ bottom: +15 + "px" }, 200);

  function moveTo(hero) {
    $("#sliderList li")
      .removeClass("active")
      .eq(hero)
      .addClass("active");
    $("#sliderList li.active").animate({ bottom: +15 + "px" }, 200);
    $(".hero-list").animate({ left: -164 * hero + "px" }, 200);
  }

  $("#leftButton").click(function() {
    hero = $("#sliderList li.active").index();
    if (hero == 0) {
      hero = 4;
    }
    hero -= 1;
    moveTo(hero);
  });

  $("#rightButton").click(function() {
    hero = $("#sliderList li.active").index();
    if (hero == 3) {
      hero = -1;
    }
    hero += 1;
    moveTo(hero);
  });

  $("#sliderList li").click(function() {
    hero = $(this).index();
    moveTo(hero);
  });
});

